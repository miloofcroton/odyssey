import { css } from '@linaria/core';

import Icons from './Icons';
import Logo from './Logo';
import Statements from './Statements';

const Footer = () => {
  return (
    <footer className={css`
      color: black;
      p {
        margin: 5px auto;
      }
    `}>
      <Logo />
      <Statements />
      <Icons />
    </footer>
  );
};

export default Footer;
