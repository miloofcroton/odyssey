import { css } from '@linaria/core';

import type { Route } from './+types/posts.$id';

import type { Post } from '~/resources/posts';

export function meta({ params }: Route.MetaArgs) {
  const id = decodeURI(params.id);
  return [
    { title: `Posts | ${id}` },
    { name: 'description', content: `All about ${id}!` },
  ];
}

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  const res = await fetch(`http://localhost:4444/api/posts/${params.id}`);
  const post = await res.json();
  return { post };
};

const CityDetailRoute: React.FC<{
  loaderData: {
    post: Post
  }
}> = ({ loaderData }) => {
  const { post } = loaderData;

  console.log({ post });

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
            {
              post.frontmatter.title
                ? (<h1>{post.frontmatter.title}</h1>)
                : (<h1>[Untitled]</h1>)
            }
            {
              post.frontmatter.author &&
              (<h3>Author: {post.frontmatter.author}</h3>)
            }
          </div>
        </header>

        <div
          className={css`
            padding-left: 1rem;
            padding-right: 1rem;
            margin-top: 1.5rem;
            width: 100%;
            max-width: 600px;
          `}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );

};

export default CityDetailRoute;
