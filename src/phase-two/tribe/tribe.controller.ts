import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TribeService } from './tribe.service';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Tribe')
@Controller('tribe')
export class TribeController {
  constructor(private readonly tribeService: TribeService) {}

  @Post()
  @ApiOkResponse({ description: 'Created Tribe' })
  @ApiBody({ type: CreateTribeDto })
  @ApiOperation({ summary: 'Create Tribe' })
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
  @ApiOkResponse({ description: 'Updated Tribe' })
  @ApiBody({ type: UpdateTribeDto })
  @ApiOperation({ summary: 'Update Tribe by Id' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTribeDto: UpdateTribeDto,
  ) {
    return this.tribeService.update(id, updateTribeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tribeService.remove(+id);
  }
}
