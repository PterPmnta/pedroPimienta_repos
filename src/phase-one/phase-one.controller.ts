import { Controller, Get } from '@nestjs/common';
import { PhaseOneService } from './phase-one.service';

@Controller('phase-one')
export class PhaseOneController {
  constructor(private readonly phaseOneService: PhaseOneService) {}

  @Get()
  findFaseUno() {
    return this.phaseOneService.getMockSimulated();
  }

  @Get('/mock-fase-tres')
  findFaseTres() {
    return this.phaseOneService.getMockPhaseThree();
  }
}
