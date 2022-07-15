import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { TribeModule } from './tribe/tribe.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [OrganizationModule, RepositoriesModule, TribeModule, MetricsModule],
  exports: [OrganizationModule, RepositoriesModule, TribeModule, MetricsModule],
})
export class PhaseTwoModule {}
