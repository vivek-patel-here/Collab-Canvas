import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { supabaseAdmin } from './supabase.admin';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SupabaseWSGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient();
    const token = client.handshake.auth?.token;

    if (!token) {
      client.disconnect();
      return false;
    }

    const { data, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !data?.user) {
      client.disconnect();
      return false;
    }

    const code = client.handshake.query?.code;

    const meeting = await this.prisma.meeting.findUnique({
      where: {
        code
      }
    })

    if (!meeting) {
      client.disconnect();
      return false;
    }

    const alreadyJoined = await this.prisma.participant.findFirst({
      where: {
        meetingId: meeting.id,
        userId: data.user.id
      }
    })
    if(!alreadyJoined){
      client.disconnect();
      return false;}
      
    client.user = data.user;

    return true;
  }
}
