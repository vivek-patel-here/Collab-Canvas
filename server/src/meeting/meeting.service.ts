import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomBytes } from 'node:crypto';
import { AccessToken } from 'livekit-server-sdk';


@Injectable()
export class MeetingService {
    constructor(private prisma: PrismaService) { }

    generateMeetingCode(): string {
        return randomBytes(4).toString("base64url").toUpperCase().slice(0, 8);
    }

    async createNewMeeting(info: { userId: string, name: string }) {
        return await this.prisma.$transaction(async (tx) => {
            const meeting = await tx.meeting.create({
                data: {
                    code: this.generateMeetingCode(),
                    hostId: info.userId,
                    isActive: true,
                },
            });

            await tx.participant.create({
                data: {
                    meetingId: meeting.id,
                    userId: info.userId,
                    name: info.name,
                    role: "HOST",
                    canDraw: true,
                },
            });

            return meeting;
        });
    }

    async joinMeeting(participantInfo: { name: string, code: string, userId: string }) {
        const meeting = await this.prisma.meeting.findUnique({
            where: {
                code: participantInfo.code
            }
        })

        if (!meeting) throw new HttpException("Invalid meeting code", HttpStatus.BAD_REQUEST);

        const alreadyJoined = await this.prisma.participant.findFirst({
            where: {
                meetingId: meeting.id,
                userId: participantInfo.userId
            }
        })

        if (alreadyJoined) return alreadyJoined;

        const newParticipant = await this.prisma.participant.create({
            data: {
                userId: participantInfo.userId,
                name: participantInfo.name,
                meetingId: meeting.id,
                role: "MEMBER",
            }
        })

        return newParticipant;

    }

    async leaveMeeting(participantInfo: { userId: string, code: string }) {

        const meeting = await this.prisma.meeting.findUnique({
            where: {
                code: participantInfo.code
            }
        })

        if (!meeting) throw new BadRequestException("No meeting found");

        const participantExists = await this.prisma.participant.findFirst({
            where: {
                meetingId: meeting.id,
                userId: participantInfo.userId
            }
        })
        if (!participantExists) throw new HttpException("Pariticipant not found", HttpStatus.NOT_FOUND);

        await this.prisma.participant.deleteMany({
            where: {
                meetingId: meeting.id,
                userId: participantInfo.userId
            }
        })

        return participantExists;
    }

    async createLivekitToken(userId: string, roomCode: string,username:string) {

        if (!process.env.LIVEKIT_API_KEY || !process.env.LIVEKIT_API_SECRET) throw new Error("LiveKit env vars missing");

        const meetingExists = await this.prisma.meeting.findFirst({
            where: {
                code: roomCode
            }
        })

        if (!meetingExists) throw new BadRequestException("No meeting found.")

        const userJoined = await this.prisma.participant.findFirst({
            where: {
                userId,
                meetingId: meetingExists.id
            }
        })

        if (!userJoined) throw new HttpException("Pariticipant not found", HttpStatus.NOT_FOUND);

        
        const token = new AccessToken(
            process.env.LIVEKIT_API_KEY,
            process.env.LIVEKIT_API_SECRET,
            {
                identity: username,
                ttl: '1h',
            }
        );

        token.addGrant({
            roomJoin: true,
            room:roomCode,
            canPublish: true,
            canSubscribe: true,
        });

        return token.toJwt();
    }


}
