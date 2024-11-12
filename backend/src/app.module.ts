import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class AppModule {}
