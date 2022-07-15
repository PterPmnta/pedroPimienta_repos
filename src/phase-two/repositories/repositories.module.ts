import { Module } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { RepositoriesController } from './repositories.controller';
import { Repositories } from './entities/repository.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Repositories])],
  controllers: [RepositoriesController],
  providers: [
    {
      provide: 'REPOSITORIES_SERVICE',
      useClass: RepositoriesService,
    },
  ],
})
export class RepositoriesModule {}
