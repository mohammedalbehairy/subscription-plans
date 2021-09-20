import { DocumentBuilder } from '@nestjs/swagger';

export const openapiConfig = new DocumentBuilder()
  .setTitle('Subscription-Plans')
  .setDescription('Subscription Plans API description')
  .setVersion('1.0')
  .build();
