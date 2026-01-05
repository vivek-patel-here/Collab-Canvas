import { Body, Controller, Post,UseGuards,Req, Get, Param } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { SupabaseGuard } from 'src/supabase/supabase.guard';

@Controller('canvas')
@UseGuards(SupabaseGuard)
export class CanvasController {
    constructor(private readonly canvasService:CanvasService){}

    @Post('save')
    async saveCanvas(@Req() req:any,@Body() body:any){
        const userId =req.user.id;
        const title = body.title;
        const canvasSnapshot = body.elements;
        return this.canvasService.saveCanvasSnapshot(userId, title,canvasSnapshot);
    }

    @Get(':id')
    async getCanvas(@Req() req:any,@Body() body:any,@Param('id') id:string){
        const userId = req.user.id;
        const snapshotId = id;
        return this.canvasService.loadCanvasSnapshot(userId,snapshotId);
    }

    @Get('all')
    async getAllCanvas(@Req() req:any){
        const userId = req.user.id;
        return this.canvasService.getAllCanvasOfASpecificUser(userId);
    }
    
}
