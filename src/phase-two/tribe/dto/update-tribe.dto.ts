import { PartialType } from '@nestjs/swagger';
import { CreateTribeDto } from './create-tribe.dto';

export class UpdateTribeDto extends PartialType(CreateTribeDto) {}
