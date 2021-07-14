import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { TopPageController } from './top-page/top-page.controller';

@Module({
  controllers: [AppController, TopPageController],
  providers: [AppService],
  imports: [ProductModule, AuthModule, ReviewModule],
})
export class AppModule { }
