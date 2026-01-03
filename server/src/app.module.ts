import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MeetingModule } from './meeting/meeting.module';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [PrismaModule, MeetingModule, SupabaseModule],
  
})
export class AppModule {}
