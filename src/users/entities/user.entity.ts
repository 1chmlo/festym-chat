import { Chat } from 'src/chat/entities/chat.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(() => Chat, (chat) => chat.sender)
  sentChats: Chat[];

  @OneToMany(() => Chat, (chat) => chat.receiver)
  receivedChats: Chat[];
}
