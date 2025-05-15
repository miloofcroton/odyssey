import { defineEventHandler, type EventHandler } from 'h3';
import { defineRouteMeta } from 'nitropack/runtime';

import { getCities } from '~/methods/cities';

defineRouteMeta({
  openAPI: {
    tags: ['cities'],
    description: 'Get all cities',
    parameters: [
      { in: 'query', name: 'count', required: false },
      { in: 'query', name: 'page', required: false },
    ],
  },
});

const handler: EventHandler = ((event) => {
  const cities = getCities();
  return cities;
});

export default defineEventHandler(handler);
