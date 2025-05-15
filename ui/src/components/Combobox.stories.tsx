import * as React from 'react';
import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from './Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './Command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './Popover';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const buttonStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  color: hsl(var(--foreground));

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-state="open"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const popoverContentStyles = css`
  width: 100%;
  max-width: 20rem;
  padding: 0;
  margin-top: 0.25rem;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--popover));
  color: hsl(var(--popover-foreground));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const commandInputStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const commandEmptyStyles = css`
  padding: 0.75rem;
  text-align: center;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

const commandItemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  outline: none;

  &[data-selected="true"] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const checkIconStyles = css`
  margin-left: auto;
  height: 1rem;
  width: 1rem;
  opacity: 0;

  [data-selected="true"] & {
    opacity: 1;
  }
`;

type ComboboxProps = React.ComponentProps<typeof Popover>;

const meta = {
  title: 'Components/Combobox',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const ComboboxDemo = (props: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={buttonStyles}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <ChevronsUpDown className={css`
            height: 1rem;
            width: 1rem;
            opacity: 0.5;
          `} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={popoverContentStyles}>
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className={commandInputStyles}
          />
          <CommandEmpty className={commandEmptyStyles}>
            No framework found.
          </CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
                className={commandItemStyles}
                data-selected={value === framework.value}
              >
                {framework.label}
                <Check className={checkIconStyles} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const Default: Story = {
  render: (args: ComboboxProps) => <ComboboxDemo {...args} />,
};
