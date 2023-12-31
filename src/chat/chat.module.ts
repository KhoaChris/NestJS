import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from 'src/schemas/chat.schemas';

@Module({
  imports: [MongooseModule.forFeature([{name: Chat.name, schema: ChatSchema}])],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
