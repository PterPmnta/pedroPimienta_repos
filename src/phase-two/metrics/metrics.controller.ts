import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Metrics')
@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Post()
  @ApiOkResponse({ description: 'Created Metric' })
  @ApiBody({ type: CreateMetricDto })
  @ApiOperation({ summary: 'Create Metric' })
  create(@Body() createMetricDto: CreateMetricDto) {
    return this.metricsService.create(createMetricDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Returned list of all metrics' })
  @ApiOperation({ summary: 'Returned list of all metrics' })
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
    return this.metricsService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Return Metric' })
  @ApiOperation({ summary: 'Return specific Metric by Id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.metricsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Updated Metric' })
  @ApiBody({ type: UpdateMetricDto })
  @ApiOperation({ summary: 'Update Metric by Id' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMetricDto: UpdateMetricDto,
  ) {
    return this.metricsService.update(id, updateMetricDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Metric' })
  @ApiOperation({ summary: 'Delete Metric by Id' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.metricsService.remove(id);
  }
}
