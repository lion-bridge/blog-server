import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import winstonLogger from '@/utils/logger/winston'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });
  await app.listen(6000);
}
bootstrap();
