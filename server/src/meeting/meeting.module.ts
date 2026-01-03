import { Module } from '@nestjs/common';
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { MeetingGateway } from './meeting.gateway';

@Module({
  imports:[PrismaModule,SupabaseModule],
  controllers: [MeetingController],
  providers: [MeetingService, MeetingGateway]
})
export class MeetingModule {}
