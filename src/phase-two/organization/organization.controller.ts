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
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  @ApiOkResponse({ description: 'Created Organization' })
  @ApiBody({ type: CreateOrganizationDto })
  @ApiOperation({ summary: 'Create Organization' })
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Returned list of all organizations' })
  @ApiOperation({ summary: 'Returned list of all organizations' })
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
  async findAll(
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page = 0,
    @Query('limit', new DefaultValuePipe(0), ParseIntPipe) limit = 10,
  ) {
    return this.organizationService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Return Organization' })
  @ApiOperation({ summary: 'Return specific organization by Id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.organizationService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Updated Organization' })
  @ApiBody({ type: UpdateOrganizationDto })
  @ApiOperation({ summary: 'Update Organization by Id' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Organization' })
  @ApiOperation({ summary: 'Delete Organization by Id' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.organizationService.remove(id);
  }
}
