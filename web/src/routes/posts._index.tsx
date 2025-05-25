import { css } from '@linaria/core';

import type { Route } from './+types/posts._index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Posts' },
    { name: 'description', content: 'List all posts' },
  ];
}

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  const res = await fetch('http://localhost:4444/api/posts');
  const posts = await res.json();
  return { posts };
};

const CityMasterRoute: React.FC<{
  loaderData: {
    posts: Array<string>
  }
}> = ({ loaderData }) => {
  const { posts } = loaderData;

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
            <h1>List of Posts</h1>
          </div>
        </header>

        <div>
          <ul>
            {posts?.map(post => (
              <li key={post}>
                <a href={`/posts/${post}`}>{post}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CityMasterRoute;
