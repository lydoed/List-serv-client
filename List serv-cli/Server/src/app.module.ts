import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './Auth/Auth.controller';
import { ListController } from './List/List.controller';
import { RegisterController } from './Register/Register.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ListController, RegisterController],
  providers: [AppService],
})
export class AppModule {}

