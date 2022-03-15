import { Module } from '@nestjs/common';
import { AppController } from './nest-service.controller';
import { NestServiceService } from './nest-service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [NestServiceService],
})
export class NestServiceModule {}
