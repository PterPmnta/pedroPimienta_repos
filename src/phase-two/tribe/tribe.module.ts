import { Module } from '@nestjs/common';
import { TribeService } from './tribe.service';
import { TribeController } from './tribe.controller';

@Module({
  controllers: [TribeController],
  providers: [TribeService]
})
export class TribeModule {}
