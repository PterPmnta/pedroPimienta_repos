import { Module } from '@nestjs/common';
import { TribeService } from './tribe.service';
import { TribeController } from './tribe.controller';
import { Tribe } from './entities/tribe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe])],
  controllers: [TribeController],
  providers: [TribeService],
})
export class TribeModule {}
