import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GirlService } from './girl.service';


@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}

  @Post()
  create( ) {
    return this.girlService.create();
  }

  @Get()
  findAll() {
    return this.girlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.girlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, ) {
    return this.girlService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.girlService.remove(+id);
  }
}
