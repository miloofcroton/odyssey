import { css } from '@linaria/core';

const SITE_TITLE = 'Jack Toumey';

const Title = () => (
  <h1
    className={css`
      font-size: 30px;
      line-height: 2;
    `}
  >
    {SITE_TITLE}
  </h1>
);

export default Title;
