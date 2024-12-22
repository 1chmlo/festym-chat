import { max, MaxLength } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.sentChats)
  sender: User;

  @ManyToOne(() => User, (user) => user.receivedChats)
  receiver: User;

  @Column()
  message: string;

  @Column()
  timestamp: Date;
}
