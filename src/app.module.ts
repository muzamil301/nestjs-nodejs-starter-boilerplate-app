import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './controllers/cats/cats.modules';
import { RouterModule } from '@nestjs/core';
const sqlConfig = require('./config/database/db');

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot(sqlConfig),
    // RouterModule.register([
    //   {
    //     path: '/cats',
    //     module: CatsModule,
    //   },
    // ]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})

export class AppModule {}