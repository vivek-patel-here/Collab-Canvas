import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin:"http://localhost:3000",
    origin:"https://collab-canvas-lyart.vercel.app",
    methods:["GET","POST","PATCH","PUT","DELETE"],
    credentials:true
  })
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
