import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { openapiConfig } from './config/openapi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const document = SwaggerModule.createDocument(app, openapiConfig);
  SwaggerModule.setup('docs', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log(`---------- App is listening to port ${PORT} --------------`);
  });
}
bootstrap();
