import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ImageController } from './controller/image.controller';
import { AppService } from './app.service';
import { AppLoggerMiddleware } from '@/utils/middleware/AppLoggerMiddleware'

@Module({
  imports: [],
  controllers: [AppController, ImageController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }

}
