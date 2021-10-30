import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ImageController } from './controller/image.controller';
import { AppLoggerMiddleware } from '@/utils/middleware/AppLoggerMiddleware';
import { UploadService } from '@/service/upload.service'

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [Logger, UploadService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
