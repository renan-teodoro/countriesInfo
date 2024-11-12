import { CountriesService } from './countries.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getCountries() {
    return await this.countriesService.getCountries();
  }

  @Get(':countryCode')
  async getCountryInfo(@Param('countryCode') countryCode: string) {
    return await this.countriesService.getCountryDetails(countryCode);
  }
}
