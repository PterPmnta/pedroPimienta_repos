import { Module } from '@nestjs/common';
import { PhaseOneService } from './phase-one.service';
import { PhaseOneController } from './phase-one.controller';

@Module({
  controllers: [PhaseOneController],
  providers: [PhaseOneService]
})
export class PhaseOneModule {}
