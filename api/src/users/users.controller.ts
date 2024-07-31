import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async newUser(
    @Body() body: { login: string; password: string },
  ): Promise<User> {
    return this.usersService.create(body.login, body.password);
  }
}
