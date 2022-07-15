import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Organization } from '../../organization/entities/organization.entity';

export class CreateTribeDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'ID de la tribu' })
  id_tribe: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Nombre de la tribu' })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Estatus de la tribu' })
  status: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'ID de la organizacion' })
  id_organization: Organization;
}
