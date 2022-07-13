import { Injectable } from '@nestjs/common';
import { CreatePhaseOneDto } from './dto/create-phase-one.dto';
import { UpdatePhaseOneDto } from './dto/update-phase-one.dto';

@Injectable()
export class PhaseOneService {
  create(createPhaseOneDto: CreatePhaseOneDto) {
    return 'This action adds a new phaseOne';
  }

  findAll() {
    return `This action returns all phaseOne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phaseOne`;
  }

  update(id: number, updatePhaseOneDto: UpdatePhaseOneDto) {
    return `This action updates a #${id} phaseOne`;
  }

  remove(id: number) {
    return `This action removes a #${id} phaseOne`;
  }
}
