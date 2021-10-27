import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ImageController } from './controller/image.controller';
import { AppLoggerMiddleware } from '@/utils/middleware/AppLoggerMiddleware';

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [ Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
