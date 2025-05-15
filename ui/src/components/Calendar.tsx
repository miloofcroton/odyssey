import React from 'react';
import { DayPicker } from 'react-day-picker';
import { css, cx } from '@linaria/core';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { buttonVariants } from './Button';

const calendarStyles = css`
  padding: 0.75rem;
`;

const monthsStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const monthStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const captionStyles = css`
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
  position: relative;
  align-items: center;
  width: 100%;
`;

const captionLabelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
`;

const navStyles = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const navButtonBaseStyles = css`
  ${buttonVariants.outline}
  width: 1.75rem;
  height: 1.75rem;
  background-color: transparent;
  padding: 0;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const navButtonPreviousStyles = css`
  position: absolute;
  left: 0.25rem;
`;

const navButtonNextStyles = css`
  position: absolute;
  right: 0.25rem;
`;

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  & > * + * {
    margin-left: 0.25rem;
  }
`;

const headRowStyles = css`
  display: flex;
`;

const headCellStyles = css`
  color: var(--muted-foreground);
  border-radius: 0.375rem;
  width: 2rem;
  font-weight: normal;
  font-size: 0.8rem;
`;

const rowStyles = css`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`;

const cellBaseStyles = css`
  position: relative;
  padding: 0;
  text-align: center;
  font-size: 0.875rem;

  &:focus-within {
    position: relative;
    z-index: 20;
  }

  &:has([aria-selected]) {
    background-color: var(--accent);
  }

  &:has([aria-selected].day-range-end) {
    border-radius: 0 0.375rem 0.375rem 0;
  }
`;

const cellRangeStyles = css`
  &:has(> .day-range-end) {
    border-radius: 0 0.375rem 0.375rem 0;
  }
  &:has(> .day-range-start) {
    border-radius: 0.375rem 0 0 0.375rem;
  }
  &:first-child:has([aria-selected]) {
    border-radius: 0.375rem 0 0 0.375rem;
  }
  &:last-child:has([aria-selected]) {
    border-radius: 0 0.375rem 0.375rem 0;
  }
`;

const cellDefaultStyles = css`
  &:has([aria-selected]) {
    border-radius: 0.375rem;
  }
`;

const dayBaseStyles = css`
  ${buttonVariants.ghost}
  width: 2rem;
  height: 2rem;
  padding: 0;
  font-weight: normal;
  &[aria-selected] {
    opacity: 1;
  }
`;

const dayRangeStartStyles = css`
  &[aria-selected] {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
`;

const dayRangeEndStyles = css`
  &[aria-selected] {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
`;

const daySelectedStyles = css`
  background-color: var(--primary);
  color: var(--primary-foreground);
  &:hover {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
  &:focus {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
`;

const dayTodayStyles = css`
  background-color: var(--accent);
  color: var(--accent-foreground);
`;

const dayOutsideStyles = css`
  color: var(--muted-foreground);
  &[aria-selected] {
    color: var(--muted-foreground);
  }
`;

const dayDisabledStyles = css`
  color: var(--muted-foreground);
  opacity: 0.5;
`;

const dayRangeMiddleStyles = css`
  &[aria-selected] {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
`;

const dayHiddenStyles = css`
  visibility: hidden;
`;

const iconStyles = css`
  width: 1rem;
  height: 1rem;
`;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cx(calendarStyles, className)}
      classNames={{
        months: cx(monthsStyles, classNames?.months),
        month: cx(monthStyles, classNames?.month),
        caption: cx(captionStyles, classNames?.caption),
        caption_label: cx(captionLabelStyles, classNames?.caption_label),
        nav: cx(navStyles, classNames?.nav),
        nav_button: cx(navButtonBaseStyles, classNames?.nav_button),
        nav_button_previous: cx(navButtonPreviousStyles, classNames?.nav_button_previous),
        nav_button_next: cx(navButtonNextStyles, classNames?.nav_button_next),
        table: cx(tableStyles, classNames?.table),
        head_row: cx(headRowStyles, classNames?.head_row),
        head_cell: cx(headCellStyles, classNames?.head_cell),
        row: cx(rowStyles, classNames?.row),
        cell: cx(
          cellBaseStyles,
          props.mode === 'range' ? cellRangeStyles : cellDefaultStyles,
          classNames?.cell
        ),
        day: cx(dayBaseStyles, classNames?.day),
        day_range_start: cx(dayRangeStartStyles, classNames?.day_range_start),
        day_range_end: cx(dayRangeEndStyles, classNames?.day_range_end),
        day_selected: cx(daySelectedStyles, classNames?.day_selected),
        day_today: cx(dayTodayStyles, classNames?.day_today),
        day_outside: cx(dayOutsideStyles, classNames?.day_outside),
        day_disabled: cx(dayDisabledStyles, classNames?.day_disabled),
        day_range_middle: cx(dayRangeMiddleStyles, classNames?.day_range_middle),
        day_hidden: cx(dayHiddenStyles, classNames?.day_hidden),
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cx(iconStyles, className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cx(iconStyles, className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
