import { defineEventHandler, type EventHandler } from 'h3';
import { defineRouteMeta } from 'nitropack/runtime';

import { getCityByShortLink } from '~/methods/cities';

defineRouteMeta({
  openAPI: {
    tags: ['cities'],
    description: 'Get city by name',
    parameters: [
      { in: 'path', name: 'name', required: true },
    ],
  },
});

const handler: EventHandler = ((event) => {
  const { name } = event.context.params;
  const city = getCityByShortLink(name);
  return city;
});

export default defineEventHandler(handler);
