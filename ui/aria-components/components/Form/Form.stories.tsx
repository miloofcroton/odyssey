import type { Meta } from '@storybook/react';
import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
} from 'react-aria-components';

import { Form } from '~/ui/Form/Form';

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <Form {...args}>
    <TextField name="email" type="email" isRequired>
      <Label>Email</Label>
      <Input />
      <FieldError />
    </TextField>
    <Button type="submit">Submit</Button>
  </Form>
);
