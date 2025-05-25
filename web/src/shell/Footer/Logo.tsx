import { css } from '@linaria/core';

const defaultLogo = '/logo/logo.png';
const altLogo = '/logo/logo-alt1.png';

const Logo = () => {

  const logoMouseOver = ({ target }: any) => (target.src = altLogo);
  const logoMouseOut = ({ target }: any) => (target.src = defaultLogo);

  return (
    <a href="https://www.youtube.com/watch?v=kvDMlk3kSYg">
      <img
        alt="logo"
        src={defaultLogo}
        onFocus={() => {}}
        onBlur={() => {}}
        onMouseOver={logoMouseOver}
        onMouseOut={logoMouseOut}
        className={css`
          width: 50px;
          padding-top: 10px;
        `}
      />
    </a>
  );
};

export default Logo;
