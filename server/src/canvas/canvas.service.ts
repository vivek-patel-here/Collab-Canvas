import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CanvasService {
    constructor(private readonly prisma:PrismaService){}

    async saveCanvasSnapshot(userId:string,title:string, elements:any){
        const savedCanvas = await this.prisma.canvasSnapshot.create({
            data:{
                title:title,
                ownerId:userId,
                elements
            }
        })
        if(!savedCanvas) throw new InternalServerErrorException('Unable to save to DB');
        return savedCanvas;
    }

    async loadCanvasSnapshot(userId:string,snapshotId:string){
        const canvasSnapshotExists = await this.prisma.canvasSnapshot.findUnique({
            where:{
                ownerId:userId,
                id:snapshotId
            }
        })
        if(!canvasSnapshotExists) throw new NotFoundException('No canvas snapshot found!')
        return canvasSnapshotExists;
    }

    async getAllCanvasOfASpecificUser(userId:string){
        const allCanvasSnapShots = await this.prisma.canvasSnapshot.findMany({
            where:{
                ownerId:userId
            }
        })
        if(!allCanvasSnapShots) throw new NotFoundException("No canvas snapshot Found!");
        return allCanvasSnapShots;
    }
    
}
