import { IsEnum, IsString } from "class-validator"

enum Role {
    MEMBER = "MEMBER",
    HOST = "HOST"
}

export class participantDto {

    @IsString()
    meetingId: String

    @IsString()
    UserId: String

    @IsString()
    name: String

    @IsEnum(Role)
    role: Role
}

