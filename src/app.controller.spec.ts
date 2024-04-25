import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('Должно вернуть "404 NotFound"', async () => {
      await expect(appController.getGeoInfo({ ip: '127.0.0.1' })).rejects.toThrow(
        'нет данных по этому ip',
      );
    });
  });
});
