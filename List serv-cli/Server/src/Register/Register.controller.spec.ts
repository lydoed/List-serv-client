import { Test, TestingModule } from '@nestjs/testing';
import { RegisterController } from './Register.controller';

describe('Registerontroller', () => {
  let controller: RegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterController],
    }).compile();

    controller = module.get<RegisterController>(RegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
