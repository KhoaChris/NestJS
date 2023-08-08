import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  content: string;

  @Prop()
  sender: string;

  @Prop()
  receiver: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: Date;
  
  @Prop()
  isDeleted: boolean; 
}

export const ChatSchema = SchemaFactory.createForClass(Chat);