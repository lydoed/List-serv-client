import { Controller, Post, Response, Body } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly appService: AppService) {}

    @Post()
    async getRegister(@Response() res, @Body() inf:Object): Promise<any> {
        const data = await this.appService.getRegister(inf);
        res.status(200).json(data);
    }
}
