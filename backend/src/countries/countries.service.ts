import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

  async getCountries() {
    const res = await this.httpService
      .get(`${process.env.NAGER_URL}/AvailableCountries`)
      .toPromise();

    return res.data;
  }

  async getCountryDetails(countryCode: string) {
    const allRequestedData = await Promise.resolve([
      this.httpService
        .get(`${process.env.NAGER_URL}/CountryInfo/${countryCode}`)
        .toPromise(),
      this.httpService.get(`${process.env.POPULATION_URL}`).toPromise(),
      this.httpService.get(`${process.env.FLAG_URL}`).toPromise(),
    ]).then((res) => res[0]);

    console.log(allRequestedData);

    const countryInfo = await this.httpService
      .get(`${process.env.NAGER_URL}/CountryInfo/${countryCode}`)
      .toPromise();

    const countryName = countryInfo.data.commonName;

    const populationData = await this.httpService
      .get(`${process.env.POPULATION_URL}`)
      .toPromise();

    const flag = await this.httpService
      .get(`${process.env.FLAG_URL}`)
      .toPromise();

    return {
      countryName,
      borderCountries: countryInfo.data.borders,
      populationData: populationData.data.data.filter(
        (data) => data.country === countryName,
      )[0].populationCounts,
      flagUrl: flag.data.data.filter((data) => data.name === countryName)[0]
        .flag,
    };
  }
}
