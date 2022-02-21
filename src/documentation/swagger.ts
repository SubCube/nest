import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function bootstrapSwagger(app: INestApplication) {
	const config = new DocumentBuilder()
		.setTitle('Nest Server')
		.setDescription('Free API: Nest, Typescript, Postgres, Sequelize')
		.setVersion('1.0.0')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/docs', app, document)
}
