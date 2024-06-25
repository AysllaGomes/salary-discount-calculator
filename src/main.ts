import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { environment } from './config/environment';

import { AppModule } from './app/module/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: environment.app.web_url,
  });

  const config = new DocumentBuilder()
    .setTitle('Salary Discount API')
    .setDescription('API para calcular descontos salariais')
    .setVersion('1.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(environment.app.port);
}

bootstrap();
