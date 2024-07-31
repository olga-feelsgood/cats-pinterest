import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { Like } from './entities/like.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('likes')
@UseGuards(AuthGuard('jwt'))
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get()
  async listLikes(): Promise<{ data: Like[] }> {
    const likes = await this.likesService.findAll();
    return { data: likes };
  }

  @Post()
  async newLike(@Body() body: { cat_id: string }): Promise<Like> {
    return this.likesService.create(body.cat_id);
  }

  @Delete(':cat_id')
  async dropLike(@Param('cat_id') cat_id: string): Promise<void> {
    return this.likesService.remove(cat_id);
  }
}
