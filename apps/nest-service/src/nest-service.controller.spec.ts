import { Test, TestingModule } from '@nestjs/testing';
import { NestServiceController } from './nest-service.controller';
import { NestServiceService } from './nest-service.service';

describe('NestServiceController', () => {
  let nestServiceController: NestServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestServiceController],
      providers: [NestServiceService],
    }).compile();

    nestServiceController = app.get<NestServiceController>(NestServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestServiceController.getHello()).toBe('Hello World!');
    });
  });
});
