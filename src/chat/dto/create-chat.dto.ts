export class CreateChatDto {
    id: string;
    content: string;
    sender: string;
    receiver: string;
    createdAt: string;
    updatedAt: Date;
    isDeleted: boolean;
}
