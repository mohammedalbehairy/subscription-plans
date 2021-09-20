import { ErrorResponse } from './../models/error-response.model';
import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';

@Catch()
export class ExtendedExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(exception instanceof HttpException ? exception.getStatus() : 500)
      .json(
        new ErrorResponse(
          'ALL',
          exception instanceof HttpException
            ? exception.message
            : 'System failed to handle your request, please try again later',
        ),
      );
  }
}
