import { Link } from 'react-router';
import { css } from '@linaria/core';
import { Building, Building2 } from 'lucide-react';

import type { Route } from './+types/_index';

import TileList from '~/components/TileList';

const resources = [
  {
    href: '/cities',
    text: 'Cities List Page',
    icon: <Building2 />,
  },
  {
    href: '/cities/Sacramento',
    text: 'Cities Detail Page',
    icon: <Building />,
  },
];

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

const MainPage = () => {
  return (
    <section className={css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      flex-grow: 1;
      padding: 50px;
      height: 600px;

      @media (max-width: 700px) {
        grid-template-columns: 1fr;
        padding: 0;

        span {
          display: inline-block;
        }
      }
    `}>
      <TileList  />
    </section>
  );
};

export default MainPage;
