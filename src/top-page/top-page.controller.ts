import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {

    @Post('create')
    async createTopPage(@Body() dto: Omit<TopPageModel, '_id'>) {

    }

    @Get(':id')
    async getTopPage(@Param('id') id: string) {

    }

    @Patch(':id')
    async editTopPage(@Param('id') id: string, @Body() dto: TopPageModel) {

    }

    @Delete(':id')
    async deleteTopPage(@Param('id') id: string) {

    }

    @HttpCode(200)
    @Post()
    async findTopPage(@Body() dto: FindTopPageDto) {

    }
}
