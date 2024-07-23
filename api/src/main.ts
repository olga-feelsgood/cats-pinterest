import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const PORT = config.get<number>('API_PORT');
  await app.listen(PORT || 3000, function () {
    console.table([{ Status: 'Server successfully started', Port: PORT }]);
  });
}
bootstrap();
