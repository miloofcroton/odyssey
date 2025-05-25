import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import Footer from '~/shell/Footer';
import Header from '~/shell/Header';
import Main from '~/shell/Main';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header/>
        <Main>{children}</Main>
        <Footer/>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};
