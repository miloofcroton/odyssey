import { mocks } from 'data';

const { cities } = mocks;

export const getCities = () => cities;

export const getCityByName = (name: string) => cities.find(city => city.name === name);

export const getCityByShortLink = (shortLink: string) => cities.find(city => city.shortLink === shortLink);
