import { Injectable } from '@nestjs/common';
import { Girl } from './entities/girl.entity';
import {Repository} from 'typeorm'
import {InjectRepository}from '@nestjs/typeorm'



@Injectable()
export class GirlService {
  constructor(@InjectRepository(Girl) private readonly girl:Repository<Girl>){}

  create() {

    const girl = new Girl();
    girl.name = '金金';
    girl.age =27;
    return this.girl.save(girl);

  }

  findAll() {
    return `This action returns all girl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} girl`;
  }

  update(id: number) {
    return `This action updates a #${id} girl`;
  }

  remove(id: number) {
    return `This action removes a #${id} girl`;
  }
}
