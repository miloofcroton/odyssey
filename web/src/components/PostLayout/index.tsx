import { css } from '@linaria/core';

const PostLayout: React.FC<{
  children: React.ReactNode,
}> = ({ children, ...props }) => {

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
            <h1>Posts Layout</h1>
          </div>
        </header>

        {children}
      </div>
    </main>
  );
};

export default PostLayout;
