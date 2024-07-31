import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  @IsNumber()
  like_id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  cat_id: string;

  @CreateDateColumn()
  @IsDate()
  @IsNotEmpty()
  created_at: Date;
}
