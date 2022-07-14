import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { CreateRepoDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

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
  findAll() {
    return this.repositoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repositoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRepositoryDto: UpdateRepositoryDto,
  ) {
    return this.repositoriesService.update(+id, updateRepositoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repositoriesService.remove(+id);
  }
}
