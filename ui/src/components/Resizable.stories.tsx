import { css } from '@linaria/core';
import type { Meta } from '@storybook/react';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './Resizable';

const panelStyles = css`
  min-height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(var(--muted));
  border-radius: 0.5rem;
`;

const handleStyles = css`
  position: relative;
  width: 0.25rem;
  background-color: hsl(var(--border));
  margin: 0 -0.125rem;
  cursor: col-resize;
  transition: background-color 0.2s;

  &:hover {
    background-color: hsl(var(--border-hover));
  }
`;

const meta = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

export const Default = () => (
  <ResizablePanelGroup
    direction="horizontal"
    className={css`width: 48rem;`}
  >
    <ResizablePanel defaultSize={25}>
      <div className={panelStyles}>One</div>
    </ResizablePanel>
    <ResizableHandle className={handleStyles} />
    <ResizablePanel defaultSize={75}>
      <div className={panelStyles}>Two</div>
    </ResizablePanel>
  </ResizablePanelGroup>
);

export const Vertical = () => (
  <ResizablePanelGroup
    direction="vertical"
    className={css`min-height: 24rem; max-width: 32rem;`}
  >
    <ResizablePanel defaultSize={25}>
      <div className={panelStyles}>One</div>
    </ResizablePanel>
    <ResizableHandle className={handleStyles} />
    <ResizablePanel defaultSize={75}>
      <div className={panelStyles}>Two</div>
    </ResizablePanel>
  </ResizablePanelGroup>
);

export const Multiple = () => (
  <ResizablePanelGroup
    direction="horizontal"
    className={css`width: 48rem;`}
  >
    <ResizablePanel defaultSize={25}>
      <div className={panelStyles}>One</div>
    </ResizablePanel>
    <ResizableHandle className={handleStyles} />
    <ResizablePanel defaultSize={50}>
      <div className={panelStyles}>Two</div>
    </ResizablePanel>
    <ResizableHandle className={handleStyles} />
    <ResizablePanel defaultSize={25}>
      <div className={panelStyles}>Three</div>
    </ResizablePanel>
  </ResizablePanelGroup>
);
