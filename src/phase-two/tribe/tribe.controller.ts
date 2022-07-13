import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TribeService } from './tribe.service';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';

@Controller('tribe')
export class TribeController {
  constructor(private readonly tribeService: TribeService) {}

  @Post()
  create(@Body() createTribeDto: CreateTribeDto) {
    return this.tribeService.create(createTribeDto);
  }

  @Get()
  findAll() {
    return this.tribeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tribeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTribeDto: UpdateTribeDto) {
    return this.tribeService.update(+id, updateTribeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tribeService.remove(+id);
  }
}
