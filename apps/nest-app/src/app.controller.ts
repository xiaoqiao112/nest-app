import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NEST_SERVICE') private readonly client: ClientProxy) {}

  @Get('hello')
  getHello(@Query() query: any): Promise<string> {
    return this.client.send<string>({ cmd: 'getHello' }, query.name).toPromise();
  }
}
