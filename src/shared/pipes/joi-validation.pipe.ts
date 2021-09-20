import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error, value: validatedObject } = this.schema.validate(value, {
      abortEarly: true,
      allowUnknown: true,
      stripUnknown: true,
    });
    if (error) {
      const errorMessage = `In ${
        metadata.type
      }, ${error.details[0].message.replace(/\"/g, '')}`;
      throw new BadRequestException(errorMessage);
    }
    return validatedObject;
  }
}
