import { css } from '@linaria/core';

import type { Route } from './+types/work';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

const WorkPage = () => {
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
      Work
    </section>
  );
};

export default WorkPage;
