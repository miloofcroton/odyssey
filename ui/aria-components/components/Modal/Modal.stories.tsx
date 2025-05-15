import type { Meta } from '@storybook/react';
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  TextField,
} from 'react-aria-components';

import { Modal } from '~/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal {...args}>
      <Dialog>
        {({ close }) => (
          <form>
            <Heading slot="title">Sign up</Heading>
            <TextField autoFocus>
              <Label>First Name:</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Last Name:</Label>
              <Input />
            </TextField>
            <Button onPress={close}>Submit</Button>
          </form>
        )}
      </Dialog>
    </Modal>
  </DialogTrigger>
);
