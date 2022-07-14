import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
} from '@nestjs/common';
import { TribeService } from './tribe.service';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

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
  @ApiOkResponse({ description: 'Returned list of all tribes' })
  @ApiOperation({ summary: 'Returned list of all tribes' })
  @ApiQuery({
    name: 'page',
    type: Number,
    description: 'Page Number',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'Data limit for page',
  })
  findAll(
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page = 0,
    @Query('limit', new DefaultValuePipe(0), ParseIntPipe) limit = 10,
  ) {
    return this.tribeService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Return Tribe' })
  @ApiOperation({ summary: 'Return specific tribe by Id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
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
