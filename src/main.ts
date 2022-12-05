import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  // Creation of App
  const app = await NestFactory.create(MessagesModule);

  // Set Pipes on App
  app.useGlobalPipes(new ValidationPipe());

  // Declaration of App
  await app.listen(3000);
}
bootstrap();
