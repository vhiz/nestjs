import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [ItemsModule,ConfigModule.forRoot() ,MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
