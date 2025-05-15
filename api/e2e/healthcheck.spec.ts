import { createApp, createRouter, toPlainHandler } from 'h3';
import { describe, expect, it, type MockedFunction, vi } from 'vitest';

import healthcheck from '../src/routes/healthcheck';

// import { externalDep } from "../lib/external-dep";
// vi.mock(../lib/external-dep");
// const externalDepMock = externalDep as MockedFunction<typeof externalDep>;

describe('GET /healthcheck', () => {
  it('returns healthy', async () => {
    const handler = toPlainHandler(
      createApp().use(createRouter().get('/healthcheck', healthcheck))
    );

    // externalDepMock.mockReturnValue("mocked-value");

    const response = await handler({
      method: 'GET',
      path: '/healthcheck',
      headers: {
        'x-input': 'value',
      },
      // body: JSON.stringify({ hello: "world" }),
      // context: { foo: "mocked-bar" },
    });

    console.log({
      status: response.status,
      headers: new Set(response.headers),
      // body: JSON.parse(response.body as string),
      body: response.body as string,
    });
    console.log({
      status: 200,
      headers: new Set([['content-type', 'text/html']]),
      // headers: new Set([["content-type", "application/json"]]),
      body: 'Healthy.',
      // body: {
      // method: "GET",
      // path: "/healthcheck",
      // routerParams: {
      //   value: "hello",
      // },
      // headers: { "x-input": "value" },
      // body: { hello: "world" },
      // body: { hello: "world" },
      // context: { foo: "mocked-bar" },
      // externalDep: "mocked-value",
      // },
    });

    expect({
      status: response.status,
      headers: new Set(response.headers),
      // body: JSON.parse(response.body as string),
      body: response.body as string,
    }).toStrictEqual({
      status: 200,
      headers: new Set([['content-type', 'text/html']]),
      // headers: new Set([["content-type", "application/json"]]),
      body: 'Healthy.',
      // body: {
      //   method: "GET",
      //   path: "/healthcheck",
      // routerParams: {
      //   value: "hello",
      // },
      // headers: { "x-input": "value" },
      // body: { hello: "world" },
      // context: { foo: "mocked-bar" },
      // externalDep: "mocked-value",
      // },
    });
  });
});
