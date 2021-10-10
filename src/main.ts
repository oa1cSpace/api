import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3333;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  console.info(`\n\n\n===>    APP STARTED ON: http:localhost:${PORT}/api/\n\n\n`);
}
bootstrap();
