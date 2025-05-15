import React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
// import { css } from '@linaria/core'

type AspectRatioProps = React.ComponentProps<typeof AspectRatioPrimitive.Root>

const AspectRatio = ({ ...props }: AspectRatioProps) => {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
};

export { AspectRatio };
