import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
	@ApiProperty({ example: 'test@test.test', description: 'Почта пользователя', default: 'test@test.test' })
	readonly email: string

	@ApiProperty({ example: '123456789', description: 'Пароль', default: '123456789' })
	readonly password: string
}
