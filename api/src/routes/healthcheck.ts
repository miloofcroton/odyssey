import { defineEventHandler, type EventHandler } from 'h3';

const handler: EventHandler = ((event) => {
  // console.log({ event });
  return 'Healthy.';
});

export default defineEventHandler(handler);
