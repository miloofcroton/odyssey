import { css } from '@linaria/core';

export const Logo = ({
  src,
  alt,
  color,
}: {
  src: string,
  alt: string,
  color: 'light' | 'dark'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={color === 'dark'
        ? css`
          display: block;
          width: 100%;
        ` : css`
          display: none;
          width: 100%;
        `}
    />
  );
};

export const Text = () => (<div>Some Text</div>);
