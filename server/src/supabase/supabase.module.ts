import { Module } from '@nestjs/common';

import { SupabaseGuard } from './supabase.guard';
import { SupabaseWSGuard } from './supabase.WS_auth_guard.';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [SupabaseGuard,SupabaseWSGuard],
  exports:[SupabaseGuard,SupabaseWSGuard]
})
export class SupabaseModule {}
