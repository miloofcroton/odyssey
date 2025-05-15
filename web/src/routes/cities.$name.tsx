import { css } from '@linaria/core';
import type { City } from 'data';

import type { Route } from './+types/cities.$name';

export function meta({ params }: Route.MetaArgs) {
  const name = decodeURI(params.name);
  return [
    { title: `Cities | ${name}` },
    { name: 'description', content: `All about ${name}!` },
  ];
}

export const loader = async ({ params }: Route.LoaderArgs) => {
  const res = await fetch(`http://localhost:3000/api/cities/${params.name}`);
  const city = await res.json();
  return { city };
};

const CityDetailRoute: React.FC<{
  loaderData: {
    city: City
  }
}> = ({ loaderData }) => {
  const { city } = loaderData;

  return (
    <main className={css`
      display: flex;
      padding-bottom: 1rem;
      padding-top: 4rem;
      justify-content: center;
      align-items: center;
    `}>
      <div className={css`
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
        gap: 4rem;
        align-items: center;
        min-height: 0;
      `}>
        <header className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}>
          <div className={css`
            padding: 1rem;
            width: 500px;
            max-width: 100vw;
          `}>
            <h1>Cities Detail Page</h1>
          </div>
        </header>

        <div className={css`
          padding-left: 1rem;
          padding-right: 1rem;
          margin-top: 1.5rem;
          width: 100%;
          max-width: 300px;
        `}>
          <nav className={css`
            padding: 1.5rem;
            margin-top: 1rem;
            border-radius: 1.5rem;
            border-width: 1px;
            border-color: #E5E7EB;
          `}>
            <h2 className={css`
              line-height: 1.5rem;
              text-align: center;
              color: #a5a7aa;
            `}>
              {city.name}, {city.country}
            </h2>
            <p className={css`
              font-size: 22px;
            `}>
              Population: {city.population.toLocaleString()}
            </p>
          </nav>
        </div>
      </div>
    </main>
  );

};

export default CityDetailRoute;
