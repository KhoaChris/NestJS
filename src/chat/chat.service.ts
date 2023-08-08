import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from 'src/schemas/chat.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel : Model<Chat>){}
  
  create(createChatDto: CreateChatDto) {
    const today = new Date();
    createChatDto.createdAt = today.toISOString();
    return this.chatModel.create(createChatDto);
  }

  findAll() {
    const result = this.chatModel.find();
    return result;
  }

  findOne(id: string) {
    const result = this.chatModel.findById(id);
    return result;
  }

  async update(id: string, updateChatDto: UpdateChatDto) {
    const document = await this.chatModel.findById(id);
    document.content = updateChatDto.content;
    document.isDeleted = true;
    document.updatedAt = new Date();
    const result = document.save();
    return result;
  }

  async remove(id: string) {
    return this.chatModel.deleteOne({ _id:id}).exec();
  }
}
