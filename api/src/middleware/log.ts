import { defineEventHandler, type EventHandler, getRequestURL } from 'h3';

const handler: EventHandler = ((event) => {
  console.log('New request: ' + getRequestURL(event));
});

export default defineEventHandler(handler);
