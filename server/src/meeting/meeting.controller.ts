import { Body, Controller, Param, Post, Get, UseGuards, Req, InternalServerErrorException, HttpException, Delete } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { SupabaseGuard } from 'src/supabase/supabase.guard';

@Controller('meeting')
@UseGuards(SupabaseGuard)
export class MeetingController {
    constructor(private readonly meetingService: MeetingService) { }

    @Post('new')
    async createNewMeeting(@Req() req: any) {
        try {
            const user = req.user;
            const userId = user.id;
            const name = user.email.split('@')[0];
            return this.meetingService.createNewMeeting({ userId, name });
        } catch (err) {
            console.log(err);
            throw new InternalServerErrorException("Unable to create meeting .Try again!");
        }
    }



    @Post('join/:code')
    async join(@Req() req: any, @Param('code') code: any) {
        const userId = req.user.id;
        const name = req.user.email.split('@')[0];
        return this.meetingService.joinMeeting({ userId, code, name });
    }

    @Post('leave/:code')
    async leave(@Req() req: any, @Param('code') code: any) {
        const userId = req.user.id;
        return this.meetingService.leaveMeeting({ userId, code });
    }

    @Post('livekit-token/new')
    async getNewLiveKitToken(@Req() req: any,@Body() body:any) {
        const userId = req.user.id;
        const username = req.user.email.split('@')[0];
        const {roomCode} = body;
        return this.meetingService.createLivekitToken(userId,roomCode,username); 
    }

    @Get('all')
    async getAllMeetingDetails(@Req() req:any){
        const userId = req.user.id;
        return this.meetingService.getAllMeetingDetails(userId);
    }

    @Delete('/:id')
    async deleteMeeting(@Req() req:any,@Param('id') meetingId:any){
        return this.meetingService.deleteMeeting(meetingId,req.user.id);
    }
}
