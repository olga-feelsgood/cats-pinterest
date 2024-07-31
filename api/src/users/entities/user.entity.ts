import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  login: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;
}
