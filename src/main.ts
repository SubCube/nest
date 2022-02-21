import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { bootstrapSwagger } from './documentation/swagger'

async function bootstrap() {
	const PORT = process.env.PORT || 5002

	const app = await NestFactory.create(AppModule)

	bootstrapSwagger(app)

	await app.listen(PORT, () => {
		console.info(`Server has been started on port: ${PORT}`)
		console.warn(' Documentation at: http://localhost:5001/api/docs/')
	})
}
bootstrap()
