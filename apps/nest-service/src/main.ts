import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestServiceModule } from './nest-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NestServiceModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    },
  );

  await app.listen();
}
bootstrap();