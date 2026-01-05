import { Module, NestModule,MiddlewareConsumer } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MeetingModule } from './meeting/meeting.module';
import { SupabaseModule } from './supabase/supabase.module';
import { CanvasModule } from './canvas/canvas.module';
import { largeBodyParser } from './payloadSize';
import { CanvasController } from './canvas/canvas.controller';


@Module({
  imports: [PrismaModule, MeetingModule, SupabaseModule, CanvasModule],
  
})
export class AppModule implements NestModule {
 configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(largeBodyParser)
      .forRoutes(CanvasController);
  }
}
