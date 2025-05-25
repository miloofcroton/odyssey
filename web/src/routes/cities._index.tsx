import { css } from '@linaria/core';
import type { City } from 'data';

import type { Route } from './+types/cities._index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Cities' },
    { name: 'description', content: 'Choose from one of many' },
  ];
}

export const loader = async ({ params }: Route.LoaderArgs) => {
  const res = await fetch('http://localhost:3000/api/cities');
  const cities = await res.json();
  return { cities };
};

const CityMasterRoute: React.FC<{
  loaderData: {
    cities: Array<City>
  }
}> = ({ loaderData }) => {
  const { cities } = loaderData;

  return (
    <section className={css`
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
            <h1>Cities Master Page</h1>
          </div>
        </header>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {cities?.map(city => (
              <tr key={`${city.name}-${city.country}`}>
                <td>{city.name}</td>
                <td>{city.country}</td>
                <td>{city.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CityMasterRoute;
