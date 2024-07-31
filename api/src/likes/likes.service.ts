import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private likesRepository: Repository<Like>,
  ) {}

  async findAll(): Promise<Like[]> {
    return this.likesRepository.find();
  }

  async create(cat_id: string): Promise<Like> {
    const like = this.likesRepository.create({ cat_id });
    return this.likesRepository.save(like);
  }

  async remove(cat_id: string): Promise<void> {
    await this.likesRepository.delete({ cat_id });
  }
}
