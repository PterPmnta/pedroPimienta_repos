import { PartialType } from '@nestjs/swagger';
import { CreateRepositoryDto } from './create-repository.dto';

export class UpdateRepositoryDto extends PartialType(CreateRepositoryDto) {}
