import { Controller, Post, Response, Body } from '@nestjs/common';
import { AppService } from 'src/app.service';


@Controller('Auth')
export class AuthController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getAuth(@Response() res, @Body() tok:Object): Promise<any> {
    const data = await this.appService.getAuth(tok);
    res.status(200).json(data);
  }
}
