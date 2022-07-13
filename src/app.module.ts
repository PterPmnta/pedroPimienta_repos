import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PhaseOneModule } from './phase-one/phase-one.module';
import { PhaseTwoModule } from './phase-two/phase-two.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PhaseOneModule,
    PhaseTwoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get('PORT');
  }
}
