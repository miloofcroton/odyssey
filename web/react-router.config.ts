import type { Config } from '@react-router/dev/config';
import type { City } from 'data';
import { mockCities } from 'data/src/cities/mocks';



export default {
  appDirectory: 'src',
  buildDirectory: '.build',
  ssr: false,
  prerender: async () => {
    const res = await fetch('http://localhost:3000/api/cities');
    const cities: Array<City> = await res.json();
    const cityShortlinks = cities
      .map(city => `/cities/${city.shortLink}`);

    return [
      '/',
      '/cities',
      ...cityShortlinks,
    ];
  },
} satisfies Config;
