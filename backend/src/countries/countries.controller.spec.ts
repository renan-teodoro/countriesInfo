import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { HttpModule } from '@nestjs/axios';

describe('CountriesController', () => {
  let controller: CountriesController;
  let service: CountriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [CountriesController],
      providers: [CountriesService],
    }).compile();

    controller = module.get<CountriesController>(CountriesController);
    service = module.get<CountriesService>(CountriesService);
  });
  it('should return an array of countries', async () => {
    const result = [
      { countryCode: 'BR', countryName: 'Brazil' },
      { countryCode: 'US', countryName: 'United States' },
    ];
    jest.spyOn(service, 'getCountries').mockImplementation(async () => result);
    expect(await controller.getCountries());
  });

  it('should return country details', async () => {
    const countryCode = 'AU';
    const result = {
      borderCountries: [],
      populationData: [
        {
          year: 1960,
          value: 10276477,
        },
        {
          year: 1961,
          value: 10483000,
        },
        {
          year: 1962,
          value: 10742000,
        },
        {
          year: 1963,
          value: 10950000,
        },
        {
          year: 1964,
          value: 11167000,
        },
        {
          year: 1965,
          value: 11388000,
        },
        {
          year: 1966,
          value: 11651000,
        },
        {
          year: 1967,
          value: 11799000,
        },
        {
          year: 1968,
          value: 12009000,
        },
        {
          year: 1969,
          value: 12263000,
        },
        {
          year: 1970,
          value: 12507000,
        },
        {
          year: 1971,
          value: 12937000,
        },
        {
          year: 1972,
          value: 13177000,
        },
        {
          year: 1973,
          value: 13380000,
        },
        {
          year: 1974,
          value: 13723000,
        },
        {
          year: 1975,
          value: 13893000,
        },
        {
          year: 1976,
          value: 14033000,
        },
        {
          year: 1977,
          value: 14192000,
        },
        {
          year: 1978,
          value: 14358000,
        },
        {
          year: 1979,
          value: 14514000,
        },
        {
          year: 1980,
          value: 14692000,
        },
        {
          year: 1981,
          value: 14927000,
        },
        {
          year: 1982,
          value: 15178000,
        },
        {
          year: 1983,
          value: 15369000,
        },
        {
          year: 1984,
          value: 15544000,
        },
        {
          year: 1985,
          value: 15758000,
        },
        {
          year: 1986,
          value: 16018400,
        },
        {
          year: 1987,
          value: 16263900,
        },
        {
          year: 1988,
          value: 16532200,
        },
        {
          year: 1989,
          value: 16814400,
        },
        {
          year: 1990,
          value: 17065100,
        },
        {
          year: 1991,
          value: 17284000,
        },
        {
          year: 1992,
          value: 17495000,
        },
        {
          year: 1993,
          value: 17667000,
        },
        {
          year: 1994,
          value: 17855000,
        },
        {
          year: 1995,
          value: 18072000,
        },
        {
          year: 1996,
          value: 18311000,
        },
        {
          year: 1997,
          value: 18517000,
        },
        {
          year: 1998,
          value: 18711000,
        },
        {
          year: 1999,
          value: 18926000,
        },
        {
          year: 2000,
          value: 19153000,
        },
        {
          year: 2001,
          value: 19413000,
        },
        {
          year: 2002,
          value: 19651400,
        },
        {
          year: 2003,
          value: 19895400,
        },
        {
          year: 2004,
          value: 20127400,
        },
        {
          year: 2005,
          value: 20394800,
        },
        {
          year: 2006,
          value: 20697900,
        },
        {
          year: 2007,
          value: 20827600,
        },
        {
          year: 2008,
          value: 21249200,
        },
        {
          year: 2009,
          value: 21691700,
        },
        {
          year: 2010,
          value: 22031750,
        },
        {
          year: 2011,
          value: 22340024,
        },
        {
          year: 2012,
          value: 22733465,
        },
        {
          year: 2013,
          value: 23128129,
        },
        {
          year: 2014,
          value: 23475686,
        },
        {
          year: 2015,
          value: 23815995,
        },
        {
          year: 2016,
          value: 24190907,
        },
        {
          year: 2017,
          value: 24601860,
        },
        {
          year: 2018,
          value: 24982688,
        },
      ],
      flagUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    };
    jest
      .spyOn(service, 'getCountryDetails')
      .mockImplementation(async () => result);

    expect(await controller.getCountryInfo(countryCode));
  });
});
