import { css } from '@linaria/core';

const PostLayout: React.FC<{
  children: React.ReactNode,
}> = ({ children, ...props }) => {

  return (
    <section className={css`
      span {
        margin: 50px auto;
        font-size: 30px;
      }
      p {
        width: 60%;
        text-align: left;
        margin: 25px auto;
      }
    `}>
      {children}
    </section>
  );
};

export default PostLayout;
