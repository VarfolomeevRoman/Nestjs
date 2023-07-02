import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

   @Get('a')
   getUsers(){
    return this.userService.getUsers()
   }
   @Get('b')
   getUser(){
    return 'ssss'
   }

}
