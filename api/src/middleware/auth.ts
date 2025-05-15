import { defineEventHandler, type EventHandler } from 'h3';

const handler: EventHandler = ((event) => {
  event.context.auth = { user: 123 };
});

export default defineEventHandler(handler);
