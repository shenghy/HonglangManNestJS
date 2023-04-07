import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',           // 数据库类型
      host:'localhost',       // 数据库的连接地址host
      port:3306,              // 数据库的端口 3306
      username:'root',        // 连接账号
      password:'root123',     // 连接密码
      database:'HongLangMan',     // 连接的表名
      retryDelay:500,         // 重试连接数据库间隔
      retryAttempts:10,       // 允许重连次数
      synchronize:true,       // 是否将实体同步到数据库
      autoLoadEntities:true,  // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
    }),
    GirlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
