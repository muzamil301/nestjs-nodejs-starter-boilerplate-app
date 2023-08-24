import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './cat-dto';
import { CatsService } from './cats.services';

@Controller('cats')
export class CatsController {
  constructor(private catsService:CatsService){}
 
  @Get()
  async getCats() {
    const data = await this.catsService.findAll();
    console.log(data);
    return data;
    
    
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto){
    return this.catsService.create(createCatDto)
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