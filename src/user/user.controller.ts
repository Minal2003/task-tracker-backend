import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

@Post('register')
async register(@Body() dto: CreateUserDto) {
  return this.userService.createUser(dto);
}

}
