import { css } from '@linaria/core';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={css`
      display: flex;
      flex-direction: column;
      height: 100vh;
      -moz-box-pack: justify;
      justify-content: space-between;
      text-align: center;
      margin: 0px;
    `}>
      {children}
    </main>
  );
};

export default Main;
