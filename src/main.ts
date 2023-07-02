import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configservise = app.get(ConfigService)
  const port = configservise.get('port')
  await app.listen(port);
}
bootstrap();
