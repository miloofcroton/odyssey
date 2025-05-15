import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from './AspectRatio';

const containerStyles = css`
  width: 100%;
  max-width: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const imageStyles = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

type AspectRatioProps = React.ComponentProps<typeof AspectRatio>;

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: AspectRatioProps) => (
    <div className={containerStyles}>
      <AspectRatio ratio={16 / 9} {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="by Drew Beamer"
          className={imageStyles}
        />
      </AspectRatio>
    </div>
  ),
};
