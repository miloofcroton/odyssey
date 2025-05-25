import { Link } from 'react-router';
import { css } from '@linaria/core';

import { theme } from '~/styles/theme';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  // {
  //   href: '/play',
  //   label: 'Play',
  // },
  // {
  //   href: '/thoughts',
  //   label: 'Thoughts',
  // },
];

const Nav = () => {

  return (
    <nav className={css`
      margin: 0px 0px 15px 0px;
    `}>
      {
        routes.map((route, i) => (
          <Link key={i} to={route.href} className={css`
            box-sizing: border-box;
            margin: 5px;
            padding: 8px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            background-color: ${theme.darkgreen};
            border: 1px solid ${theme.black};

            &:hover {
              background-color: ${theme.lightgreen};
            }
          `}>
            {route.label}
          </Link>
        ))
      }
    </nav>
  );
};

export default Nav;
