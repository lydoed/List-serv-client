import { Controller, Post, Response, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('login')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getLogin(@Response() res, @Body() tok:Object): Promise<any> {
    const data = await this.appService.getLogin(tok);
    res.status(200).json(data); 
  }
}
