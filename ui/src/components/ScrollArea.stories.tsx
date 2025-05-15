import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from './ScrollArea';
import { Separator } from './Separator';

const scrollAreaStyles = css`
  width: 16rem;
  height: 20rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
`;

const viewportStyles = css`
  padding: 1rem;
`;

const separatorStyles = css`
  margin: 0.5rem -1rem;
  background-color: hsl(var(--border));
`;

const tagStyles = css`
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
  font-size: 0.75rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
`;

const headingStyles = css`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

type ScrollAreaProps = React.ComponentProps<typeof ScrollArea>;

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Tag ${a.length - i}`
);

export const Default: Story = {
  render: (args: ScrollAreaProps) => (
    <ScrollArea className={scrollAreaStyles} {...args}>
      <div className={viewportStyles}>
        <div className={headingStyles}>Tags</div>
        <div>
          {tags.map((tag) => (
            <span key={tag} className={tagStyles}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

const NESTED_ITEMS = [
  {
    title: 'First section',
    items: Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`),
  },
  {
    title: 'Second section',
    items: Array.from({ length: 10 }, (_, i) => `Item ${i + 11}`),
  },
  {
    title: 'Third section',
    items: Array.from({ length: 10 }, (_, i) => `Item ${i + 21}`),
  },
  {
    title: 'Fourth section',
    items: Array.from({ length: 10 }, (_, i) => `Item ${i + 31}`),
  },
];

export const WithSections: Story = {
  render: (args: ScrollAreaProps) => (
    <ScrollArea className={scrollAreaStyles} {...args}>
      <div className={viewportStyles}>
        {NESTED_ITEMS.map(({ title, items }, i) => (
          <div key={title}>
            <div className={headingStyles}>{title}</div>
            <div>
              {items.map((item) => (
                <div key={item} className={css`padding: 0.25rem 0;`}>
                  {item}
                </div>
              ))}
            </div>
            {i < NESTED_ITEMS.length - 1 && (
              <Separator className={separatorStyles} />
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
