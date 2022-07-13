import { Injectable } from '@nestjs/common';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';

@Injectable()
export class TribeService {
  create(createTribeDto: CreateTribeDto) {
    return 'This action adds a new tribe';
  }

  findAll() {
    return `This action returns all tribe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tribe`;
  }

  update(id: number, updateTribeDto: UpdateTribeDto) {
    return `This action updates a #${id} tribe`;
  }

  remove(id: number) {
    return `This action removes a #${id} tribe`;
  }
}
