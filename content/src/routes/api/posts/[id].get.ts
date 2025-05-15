import { defineEventHandler } from 'h3';

import { getPostById } from '~/lib/methods';

defineRouteMeta({
  openAPI: {
    tags: ['posts'],
    description: 'Get post by id.',
    parameters: [
      { in: 'path', name: 'id', required: true },
    ],
  },
});

const handler = async (event) => {
  const { id } = event.context.params;
  const post = getPostById(id);
  return post;
};

export default defineEventHandler(handler);
