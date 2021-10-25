import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ImageController } from './controller/image.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ImageController],
  providers: [AppService],
})
export class AppModule {}
