import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent } from './Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';

const carouselStyles = css`
  width: 100%;
  max-width: 48rem;
  position: relative;
`;

const carouselItemStyles = css`
  padding: 0.25rem;
  flex: 0 0 100%;

  @media (min-width: 640px) {
    flex: 0 0 50%;
  }

  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
  }
`;

const cardStyles = css`
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
`;

const cardContentStyles = css`
  display: flex;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-size: 3rem;
  font-weight: 500;
`;

type CarouselProps = React.ComponentProps<typeof Carousel>;

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: CarouselProps) => (
    <Carousel className={carouselStyles} {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className={carouselItemStyles}>
            <Card className={cardStyles}>
              <CardContent className={cardContentStyles}>
                {index + 1}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Size: Story = {
  render: (args: CarouselProps) => (
    <div className={css`
      display: flex;
      flex-direction: column;
      gap: 2rem;
    `}>
      <Carousel
        opts={{
          align: 'start',
        }}
        className={carouselStyles}
        {...args}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={css`
              padding: 0.25rem;
              flex: 0 0 50%;
            `}>
              <Card className={cardStyles}>
                <CardContent className={cardContentStyles}>
                  {index + 1}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        opts={{
          align: 'start',
        }}
        className={carouselStyles}
        {...args}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={css`
              padding: 0.25rem;
              flex: 0 0 33.333333%;
            `}>
              <Card className={cardStyles}>
                <CardContent className={cardContentStyles}>
                  {index + 1}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        opts={{
          align: 'start',
        }}
        className={carouselStyles}
        {...args}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={css`
              padding: 0.25rem;
              flex: 0 0 25%;
            `}>
              <Card className={cardStyles}>
                <CardContent className={cardContentStyles}>
                  {index + 1}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
