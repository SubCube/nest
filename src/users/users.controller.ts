import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post('/create')
	createUser(@Body() user: CreateUserDto) {
		return this.usersService.createUser(user)
	}

	@Get('/list')
	getUsersList() {
		return this.usersService.getAllUsers()
	}
}
