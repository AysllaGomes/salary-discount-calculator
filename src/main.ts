import { NestFactory } from '@nestjs/core';

import { environment } from './config/environment';

import { AppModule } from './app/module/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: environment.app.web_url,
  });

  await app.listen(environment.app.port);
}

bootstrap();
