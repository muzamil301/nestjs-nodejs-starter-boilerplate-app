import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatEntity } from 'src/database/entities/cat.entity';
import { CreateCatDto } from './cat-dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catRepository: Repository<CatEntity>
  ){}
  
//   create(cat: CreateCatDto): Promise<CreateCatDto> { 
//     return this.catRepository.save(cat);
//   }

  findAll(): Promise<CreateCatDto[]> {
    return this.catRepository.find();
  }
}