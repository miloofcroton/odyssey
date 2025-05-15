import * as React from 'react';
import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import { addDays } from 'date-fns';

import { Calendar } from './Calendar';

interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}

const calendarStyles = css`
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  padding: 1rem;
`;

const calendarHeaderStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const calendarHeaderButtonStyles = css`
  color: hsl(var(--muted-foreground));
  padding: 0.25rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

const calendarMonthStyles = css`
  font-weight: 500;
`;

const calendarGridStyles = css`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const calendarHeadCellStyles = css`
  text-align: center;
  padding: 0.25rem;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
`;

const calendarCellStyles = css`
  text-align: center;
  padding: 0.25rem;
  position: relative;
`;

const calendarDayStyles = css`
  aspect-ratio: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  color: hsl(var(--foreground));
  cursor: pointer;

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-selected] {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }

  &[data-today] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

type CalendarProps = React.ComponentProps<typeof Calendar>;

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      className={calendarStyles}
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  );
};

export const Default: Story = {
  render: () => <DefaultCalendar />,
};

const DateRangeCalendar = () => {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <Calendar
      className={calendarStyles}
      mode="range"
      selected={date}
      onSelect={(newDate: DateRange | undefined) => {
        if (newDate) {
          setDate(newDate);
        }
      }}
      numberOfMonths={2}
    />
  );
};

export const DateRange: Story = {
  render: () => <DateRangeCalendar />,
};
