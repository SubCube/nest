import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './users.model'
import { UsersService } from './users.service'

@ApiTags('Users')
@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@ApiOperation({ summary: 'Создание пользователя' })
	@ApiResponse({ status: 200, type: User })
	@Post('/create')
	createUser(@Body() user: CreateUserDto) {
		return this.usersService.createUser(user)
	}

	@ApiOperation({ summary: 'Получение всех пользователей' })
	@ApiResponse({ status: 200, type: [User] })
	@Get('/list')
	getUsersList() {
		return this.usersService.getAllUsers()
	}
}
