import { Module } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { CanvasController } from './canvas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports:[PrismaModule,SupabaseModule],
  providers: [CanvasService],
  controllers: [CanvasController]
})
export class CanvasModule {}
