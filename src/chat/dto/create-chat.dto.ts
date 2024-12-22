import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateChatDto {
  @IsNumber()
  senderId: number;
  @IsNumber()
  receiverId: number;
  @IsString()
  message: string;
  @IsString()
  timestamp: Date;
}
