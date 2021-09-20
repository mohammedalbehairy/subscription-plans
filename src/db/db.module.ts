import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        // uri: process.env.MONGODB_URI,
        uri: 'mongodb+srv://root:root@cluster0.7hdo5.mongodb.net/plans?retryWrites=true&w=majority',
        useCreateIndex: true,
        autoIndex: false,
        useFindAndModify: false,
      }),
    }),
  ],
})
export class DbModule {}
