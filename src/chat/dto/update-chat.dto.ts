import { PartialType } from '@nestjs/mapped-types';
import { CreateChatDto } from './create-chat.dto';

export class UpdateChatDto extends PartialType(CreateChatDto) {
    isDeleted?: boolean;
    updatedAt?: Date;
}
