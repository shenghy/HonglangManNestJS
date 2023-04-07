import { Module } from '@nestjs/common';
import { GirlService } from './girl.service';
import { GirlController } from './girl.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Girl} from './entities/girl.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [GirlService]
})
export class GirlModule {}
