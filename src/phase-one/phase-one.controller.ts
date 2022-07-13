import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhaseOneService } from './phase-one.service';
import { CreatePhaseOneDto } from './dto/create-phase-one.dto';
import { UpdatePhaseOneDto } from './dto/update-phase-one.dto';

@Controller('phase-one')
export class PhaseOneController {
  constructor(private readonly phaseOneService: PhaseOneService) {}

  @Post()
  create(@Body() createPhaseOneDto: CreatePhaseOneDto) {
    return this.phaseOneService.create(createPhaseOneDto);
  }

  @Get()
  findAll() {
    return this.phaseOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phaseOneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhaseOneDto: UpdatePhaseOneDto) {
    return this.phaseOneService.update(+id, updatePhaseOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phaseOneService.remove(+id);
  }
}
