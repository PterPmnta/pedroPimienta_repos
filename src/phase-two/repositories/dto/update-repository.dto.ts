import { PartialType } from '@nestjs/swagger';
import { CreateRepoDto } from './create-repository.dto';

export class UpdateRepositoryDto extends PartialType(CreateRepoDto) {}
