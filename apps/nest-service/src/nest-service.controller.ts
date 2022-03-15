import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NestServiceService } from './nest-service.service';

@Controller()
export class AppController {
  constructor(private readonly nestServiceService: NestServiceService) {}

  @MessagePattern({ cmd: 'getHello' })
  getHello(name: string): string {
    return this.nestServiceService.getHello(name);
  }
}