import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'ID de la organizacion' })
  id_organization: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Nombre de la organizacion' })
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Estatus de la organizacion' })
  status: number;
}
