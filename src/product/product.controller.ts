import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {

    @Post('create')
    async createProduct(@Body() dto: Omit<ProductModel, '_id'> ) {

    }

    @Get(':id')
    async getProduct(@Param('id') id: string) {

    }

    @Patch(':id')
    async editProduct(@Param('id') id: string, @Body() dto: ProductModel) {

    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {

    }

    @HttpCode
    (200)
    @Post()
    async findProduct(@Body() dto: FindProductDto) {

    }
}
