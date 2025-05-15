import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDays } from 'lucide-react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './HoverCard';

const triggerStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  text-decoration-line: underline;
  color: hsl(var(--foreground));
`;

const contentStyles = css`
  width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--popover));
  color: hsl(var(--popover-foreground));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: scale-in 0.2s ease-out;

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const profileStyles = css`
  display: flex;
  gap: 0.75rem;
`;

const avatarStyles = css`
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
`;

const infoStyles = css`
  display: grid;
  gap: 0.25rem;
`;

const nameStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

const usernameStyles = css`
  font-size: 0.875rem;
  line-height: 1;
  color: hsl(var(--muted-foreground));
`;

const statsStyles = css`
  display: flex;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid hsl(var(--border));
  margin-top: 1rem;
`;

const iconStyles = css`
  height: 1rem;
  width: 1rem;
  opacity: 0.5;
  margin-right: 0.25rem;
`;

type HoverCardProps = React.ComponentProps<typeof HoverCard>;

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: HoverCardProps) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <a href="https://github.com/vercel" className={triggerStyles}>
          @nextjs
        </a>
      </HoverCardTrigger>
      <HoverCardContent className={contentStyles}>
        <div className={profileStyles}>
          <img
            src="https://github.com/vercel.png"
            alt="Vercel"
            className={avatarStyles}
          />
          <div className={infoStyles}>
            <h4 className={nameStyles}>Vercel</h4>
            <p className={usernameStyles}>@vercel</p>
          </div>
        </div>
        <div className={statsStyles}>
          <div className={css`display: flex; align-items: center;`}>
            <CalendarDays className={iconStyles} />
            <span className={css`font-size: 0.875rem; color: hsl(var(--muted-foreground));`}>
              Joined December 2021
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
