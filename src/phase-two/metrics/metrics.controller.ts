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
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

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
  findAll() {
    return this.metricsService.findAll();
  }

  @Get(':id')
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
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.metricsService.remove(id);
  }
}
