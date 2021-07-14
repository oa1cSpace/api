import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
    @Post('create')
    async createReview(@Body() dto: Omit<ReviewModel, '_id'> ) {

    }

    @Delete('delete/:id')
    async deleteReview(@Param('id') id: string) {

    }

    @Get('getByProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {

    }
}
