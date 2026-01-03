import "dotenv/config"
import { Injectable } from '@nestjs/common';
import {PrismaClient} from "prisma/generated/prisma/client";
import {PrismaPg} from "@prisma/adapter-pg"

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        const connectionString = `${process.env.DATABASE_URL}`;
        let adapter = new PrismaPg({connectionString})
        super({adapter});
    }
}
