import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

import { AppController } from './app.controller';
import { TopPageController } from './top-page/top-page.controller';
import { AppService } from './app.service';
import { getMongoConfig } from './configs/mongo.config';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
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
