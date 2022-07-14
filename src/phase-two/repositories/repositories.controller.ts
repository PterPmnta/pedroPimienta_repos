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
import { RepositoriesService } from './repositories.service';
import { CreateRepoDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Repository')
@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Post()
  @ApiOkResponse({ description: 'Created Tribe' })
  @ApiBody({ type: CreateRepoDto })
  @ApiOperation({ summary: 'Create Tribe' })
  create(@Body() createRepoDto: CreateRepoDto) {
    return this.repositoriesService.create(createRepoDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Returned list of all repositories' })
  @ApiOperation({ summary: 'Returned list of all repositories' })
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
    return this.repositoriesService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Return Repository' })
  @ApiOperation({ summary: 'Return specific repository by Id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.repositoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Updated Repository' })
  @ApiBody({ type: UpdateRepositoryDto })
  @ApiOperation({ summary: 'Update Repository by Id' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRepositoryDto: UpdateRepositoryDto,
  ) {
    return this.repositoriesService.update(id, updateRepositoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Repository' })
  @ApiOperation({ summary: 'Delete Repository by Id' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.repositoriesService.remove(id);
  }
}
