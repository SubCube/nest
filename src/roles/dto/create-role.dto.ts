import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {
	@ApiProperty({ example: 'admin', description: 'Роль пользователя', default: 'user' })
	readonly value: string

	@ApiProperty({ example: 'Администратор', description: 'Описание роли пользователя', default: 'Пользователь' })
	readonly description: string
}
