import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './cat-dto';
import { CatsService } from './cats.services';

@Controller('cats')
export class CatsController {
  constructor(private catsService:CatsService){}
 
  @Get()
  async getCats() {
    // return `This action returns all cats (limit: ${query.limit} items)`;
    // return ['cat 1', 'cat 2'];

    return this.catsService.findAll();

  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}