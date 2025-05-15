import React from 'react';
import { css, cx } from '@linaria/core';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const Avatar = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cx(
        css`
          position: relative;
          display: flex;
          width: 2rem;
          height: 2rem;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 9999px;
        `,
        className
      )}
      {...props}
    />
  );
};

const AvatarImage = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cx(
        css`
          aspect-ratio: 1;
          width: 100%;
          height: 100%;
        `,
        className
      )}
      {...props}
    />
  );
};

const AvatarFallback = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cx(
        css`
          background-color: var(--muted);
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
        `,
        className
      )}
      {...props}
    />
  );
};

export { Avatar, AvatarFallback, AvatarImage };
