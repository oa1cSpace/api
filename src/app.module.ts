import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { TopPageController } from './top-page/top-page.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { TopPageModule } from './top-page/top-page.module';

@Module({
  controllers: [AppController, TopPageController],
  providers: [AppService],
  imports: [
      ConfigModule.forRoot(),
      TypegooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: getMongoConfig
      }),
      ProductModule, AuthModule, ReviewModule, TopPageModule],
})
export class AppModule { }
