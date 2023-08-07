import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ChatModule, MongooseModule.forRoot('mongodb+srv://bddkhoa:kduk51m4Mq0eszsh@learning.metjxxv.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
