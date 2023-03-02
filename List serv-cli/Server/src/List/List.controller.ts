import { Controller, Post, Response, Body } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('list')
export class ListController {
    constructor(private readonly appService: AppService) {}

    @Post('add')
    async getListAdd(@Response() res, @Body() tok:Object): Promise<any> {
        const data = await this.appService.getAdd(tok);
        res.status(200).json(data);
    }


    @Post('delete')
    async getListDelete(@Response() res, @Body() tok:Object): Promise<any> {
        const data = await this.appService.getDelete(tok);
        res.status(200).json(data);
    }


    @Post()
    async getList(@Response() res, @Body() tok:Object): Promise<any> {
        const data = await this.appService.getList(tok);
        res.status(200).json(data);
    }
}