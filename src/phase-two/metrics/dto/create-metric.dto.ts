import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMetricDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'ID de la tribu' })
  id_metric: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'Porcentage del proyecot en repositorio',
  })
  coverage: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Errores del repositorio' })
  bugs: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Cantidad de vulnerabilidades' })
  vulnerabilities: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Punto de acceso' })
  hotspot: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Cantidad de malas practicas' })
  code_smells: number;
}
