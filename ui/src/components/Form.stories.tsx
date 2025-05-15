import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';
import * as z from 'zod';

import { Button } from './Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';
import { Input } from './Input';
import { Textarea } from './Textarea';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  bio: z.string().max(160, {
    message: 'Bio must not be longer than 160 characters.',
  }),
});

const formStyles = css`
  display: grid;
  gap: 1.5rem;
  max-width: 24rem;
  width: 100%;
`;

const formItemStyles = css`
  display: grid;
  gap: 0.5rem;
`;

const labelStyles = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

const descriptionStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(var(--muted-foreground));
`;

const messageStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(var(--destructive));
`;

const inputStyles = css`
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
`;

const textareaStyles = css`
  ${inputStyles}
  min-height: 6rem;
  resize: vertical;
`;

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1;
  padding: 0.5rem 1rem;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: hsl(var(--primary) / 0.9);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

type FormValues = z.infer<typeof formSchema>;

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormDemo>;

export default meta;
type Story = StoryObj<typeof FormDemo>;

const FormDemo = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      bio: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div className={formStyles}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className={formItemStyles}>
                <FormLabel className={labelStyles}>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" className={inputStyles} {...field} />
                </FormControl>
                <FormDescription className={descriptionStyles}>
                  This is your public display name. It can be your real name or a pseudonym.
                </FormDescription>
                <FormMessage className={messageStyles} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={formItemStyles}>
                <FormLabel className={labelStyles}>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn@example.com" className={inputStyles} {...field} />
                </FormControl>
                <FormDescription className={descriptionStyles}>
                  You can manage verified email addresses in your email settings.
                </FormDescription>
                <FormMessage className={messageStyles} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className={formItemStyles}>
                <FormLabel className={labelStyles}>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className={textareaStyles}
                    {...field}
                  />
                </FormControl>
                <FormDescription className={descriptionStyles}>
                  Brief description for your profile. Maximum 160 characters.
                </FormDescription>
                <FormMessage className={messageStyles} />
              </FormItem>
            )}
          />
          <Button type="submit" className={buttonStyles}>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export const Default: Story = {
  render: () => <FormDemo />,
};
