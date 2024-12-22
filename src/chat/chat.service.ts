import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<void> {
    const sender = await this.userRepository.findOneBy({
      id: createChatDto.senderId,
    });
    const receiver = await this.userRepository.findOneBy({
      id: createChatDto.receiverId,
    });

    const chats: Chat[] = [];
    for (let i = 0; i < 10000; i++) {
      const chat = new Chat();
      chat.sender = sender;
      chat.receiver = receiver;
      chat.message = createChatDto.message;
      chat.timestamp = createChatDto.timestamp;
      chats.push(chat);
    }

    await this.chatRepository.save(chats);
  }
  async findAll() {
    return this.chatRepository.find({ relations: ['sender', 'receiver'] });
  }
  async countAll(): Promise<number> {
    return this.chatRepository.count();
  }
}
