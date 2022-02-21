import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateRoleDto } from './dto/create-role.dto'
import { RolesService } from './roles.service'

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
	constructor(private roleService: RolesService) {}

	@Post('/create')
	create(@Body() role: CreateRoleDto) {
		return this.roleService.createRole(role)
	}

	@Get('/:value')
	getByValue(@Param('value') value: string) {
		return this.roleService.getRoleByValue(value)
	}
}
