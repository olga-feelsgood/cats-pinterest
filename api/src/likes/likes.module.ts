import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { Like } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Like])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
