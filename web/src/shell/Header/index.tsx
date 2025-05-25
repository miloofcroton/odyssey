import { css } from '@linaria/core';

import Nav from '~/shell/Header/Nav';
import Title from '~/shell/Header/Title';

const Header = () => {
  return (
    <header className={css`
      text-align: center;
    `}>
      <Title />
      <Nav />
    </header>
  );
};

export default Header;
