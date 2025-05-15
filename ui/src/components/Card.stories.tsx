import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

const cardStyles = css`
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const headerStyles = css`
  padding: 1.5rem;
`;

const titleStyles = css`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
`;

const descriptionStyles = css`
  margin-top: 0.5rem;
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const contentStyles = css`
  padding: 0 1.5rem;
`;

const footerStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1.5rem;
`;

type CardProps = React.ComponentProps<typeof Card>;

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: CardProps) => (
    <Card className={cardStyles} {...args}>
      <CardHeader className={headerStyles}>
        <CardTitle className={titleStyles}>Create project</CardTitle>
        <CardDescription className={descriptionStyles}>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent className={contentStyles}>
        <form>
          <div className={css`
            display: grid;
            gap: 1rem;
          `}>
            <div className={css`
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            `}>
              <label
                htmlFor="name"
                className={css`
                  font-size: 0.875rem;
                  font-weight: 500;
                `}
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Name of your project"
                className={css`
                  border-radius: 0.375rem;
                  border: 1px solid hsl(var(--input));
                  background-color: transparent;
                  padding: 0.5rem;
                  font-size: 0.875rem;
                  color: hsl(var(--input-foreground));

                  &:focus {
                    outline: none;
                    border-color: hsl(var(--ring));
                    box-shadow: 0 0 0 1px hsl(var(--ring));
                  }
                `}
              />
            </div>
            <div className={css`
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            `}>
              <label
                htmlFor="framework"
                className={css`
                  font-size: 0.875rem;
                  font-weight: 500;
                `}
              >
                Framework
              </label>
              <select
                id="framework"
                className={css`
                  border-radius: 0.375rem;
                  border: 1px solid hsl(var(--input));
                  background-color: transparent;
                  padding: 0.5rem;
                  font-size: 0.875rem;
                  color: hsl(var(--input-foreground));

                  &:focus {
                    outline: none;
                    border-color: hsl(var(--ring));
                    box-shadow: 0 0 0 1px hsl(var(--ring));
                  }
                `}
              >
                <option value="next">Next.js</option>
                <option value="sveltekit">SvelteKit</option>
                <option value="astro">Astro</option>
                <option value="nuxt">Nuxt.js</option>
              </select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={footerStyles}>
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};
