import React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { css, cx } from '@linaria/core';
import { GripVerticalIcon } from 'lucide-react';

const panelGroupStyles = css`
  display: flex;
  height: 100%;
  width: 100%;

  &[data-panel-group-direction="vertical"] {
    flex-direction: column;
  }
`;

const handleStyles = css`
  position: relative;
  display: flex;
  width: 1px;
  align-items: center;
  justify-content: center;
  background-color: var(--border);

  &:focus-visible {
    outline: none;
    ring: 1px solid var(--ring);
    ring-offset: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    inset-block: 0;
    left: 50%;
    width: 0.25rem;
    transform: translateX(-50%);
  }

  &[data-panel-group-direction="vertical"] {
    height: 1px;
    width: 100%;

    &::after {
      left: 0;
      height: 0.25rem;
      width: 100%;
      transform: translateY(-50%);
      translate-x: 0;
    }

    & > div {
      transform: rotate(90deg);
    }
  }
`;

const handleButtonStyles = css`
  z-index: 10;
  display: flex;
  height: 1rem;
  width: 0.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid var(--border);
  background-color: var(--border);

  & svg {
    width: 0.625rem;
    height: 0.625rem;
  }
`;

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cx(panelGroupStyles, className)}
      {...props}
    />
  );
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cx(handleStyles, className)}
      {...props}
    >
      {withHandle && (
        <div className={handleButtonStyles}>
          <GripVerticalIcon />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizableHandle,ResizablePanel, ResizablePanelGroup };
