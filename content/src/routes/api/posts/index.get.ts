import { defineEventHandler } from 'h3';

import { getPostIds } from '~/lib/methods';

defineRouteMeta({
  openAPI: {
    tags: ['posts'],
    description: 'Get post ids',
    parameters: [
      { in: 'query', name: 'count', required: false },
      { in: 'query', name: 'page', required: false },
    ],
  },
});

const handler = (event) => {
  const postIds = getPostIds();
  return postIds;
};

export default defineEventHandler(handler);
