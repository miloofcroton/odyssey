import type { Meta } from '@storybook/react';
import {
  Button,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField,
} from 'react-aria-components';

import { Dialog } from '~/ui/Dialog/Dialog';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal>
      <Dialog {...args}>
        {({ close }) => (
          <form>
            <Heading slot="title">Sign up</Heading>
            <TextField autoFocus>
              <Label>First Name</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Last Name</Label>
              <Input />
            </TextField>
            <Button onPress={close} style={{ marginTop: 8 }}>
              Submit
            </Button>
          </form>
        )}
      </Dialog>
    </Modal>
  </DialogTrigger>
);
