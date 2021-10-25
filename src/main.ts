import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from '@/utils/logger/customLogger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });
  await app.listen(6000);
}
bootstrap();
