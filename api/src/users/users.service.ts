import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(login: string, password: string): Promise<User> {
    const hashedPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex');
    const user = this.usersRepository.create({
      login,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  async findByLogin(login: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { login } });
  }
}
