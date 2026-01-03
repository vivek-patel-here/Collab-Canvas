import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { supabaseAdmin } from './supabase.admin';

@Injectable()
export class SupabaseGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if(!authHeader) throw new UnauthorizedException("Missing authentication header");
    const token = authHeader.replace('Bearer ',''); 
    const {data:{user},error} = await supabaseAdmin.auth.getUser(token);

    if(!user || error) throw new UnauthorizedException("Invalid or expired token");

    req.user=user;
    return true;
  }
}
