'use client';

import React from 'react';
import { css,cx } from '@linaria/core';
import { Slot } from '@radix-ui/react-slot';
import { PanelLeftIcon } from 'lucide-react';

import { useIsMobile } from '../hooks/use-mobile';

import { Button } from './Button';
import { Input } from './Input';
import { Separator } from './Separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet';
import { Skeleton } from './Skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

const sidebarWrapperStyles = css`
  display: flex;
  min-height: 100vh;
  width: 100%;

  &[data-variant="inset"] {
    background-color: var(--sidebar);
  }
`;

const sidebarStyles = css`
  display: flex;
  height: 100%;
  width: var(--sidebar-width);
  flex-direction: column;
  background-color: var(--sidebar);
  color: var(--sidebar-foreground);
`;

const sidebarMobileStyles = css`
  & {
    padding: 0;
  }

  & > button {
    display: none;
  }
`;

const sidebarGapStyles = css`
  position: relative;
  width: var(--sidebar-width);
  background-color: transparent;
  transition: width 200ms linear;

  &[data-collapsible="offcanvas"] {
    width: 0;
  }
`;

const sidebarFixedStyles = css`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: none;
  height: 100svh;
  width: var(--sidebar-width);
  transition-property: left, right, width;
  transition-duration: 200ms;
  transition-timing-function: linear;

  @media (min-width: 768px) {
    display: flex;
  }
`;


// For side === 'left'
const leftSideStyles = css`
  left: 0;

  .group[data-collapsible="offcanvas"] & {
    left: calc(var(--sidebar-width) * -1);
  }
`;

// For side === 'right'
const rightSideStyles = css`
  right: 0;

  .group[data-collapsible="offcanvas"] & {
    right: calc(var(--sidebar-width) * -1);
  }
`;

// For variant === 'floating' || variant === 'inset'
const floatingInsetStyles = css`
  padding: 0.5rem;

  .group[data-collapsible="icon"] & {
    width: calc(var(--sidebar-width-icon) + var(--spacing(4)) + 2px);
  }
`;

// For other variants
const defaultVariantStyles = css`
  .group[data-collapsible="icon"] & {
    width: var(--sidebar-width-icon);
  }

  .group[data-side="left"] & {
    border-right-width: 1px;
  }

  .group[data-side="right"] & {
    border-left-width: 1px;
  }
`;

const sidebarButtonDefaultStyles = css`
  & {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
    border-radius: 0.375rem;
    padding: 0.5rem;
    text-align: left;
    font-size: 0.875rem;
    outline: hidden;
    transition-property: width, height, padding;
  }

  &:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  &:focus-visible {
    --tw-ring-color: var(--sidebar-ring);
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  &:active {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .group-has-data-[sidebar=menu-action]/menu-item & {
    padding-right: 2rem;
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-active="true"] {
    background-color: var(--sidebar-accent);
    font-weight: 500;
    color: var(--sidebar-accent-foreground);
  }

  &[data-state="open"]:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  .group[data-collapsible="icon"] & {
    width: 2rem !important;
    height: 2rem !important;
    padding: 0.5rem !important;
  }

  & > span:last-child {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

const sidebarButtonOutlineStyles = css`
  background-color: var(--background);
  box-shadow: 0 0 0 1px var(--sidebar-border);

  &:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
    box-shadow: 0 0 0 1px var(--sidebar-accent);
  }
`;

const sidebarButtonDefaultSizeStyles = css`
  height: 2rem;
  font-size: 0.875rem;
`;

const sidebarButtonSmallSizeStyles = css`
  height: 1.75rem;
  font-size: 0.75rem;
`;

const sidebarButtonLargeSizeStyles = css`
  height: 3rem;
  font-size: 0.875rem;

  &[data-collapsible="icon"] {
    padding: 0;
  }
`;

const sidebarTriggerStyles = css`
  height: 1.75rem;
  width: 1.75rem;
`;

const sidebarRailStyles = css`
  /* First group */
  & {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 20;
    display: none;
    width: 1rem;
    transform: translateX(-50%);
    transition-property: all;
    transition-timing-function: linear;
  }

  &:hover::after {
    background-color: var(--sidebar-border);
  }

  .group[data-side="left"] & {
    right: -1rem;
  }

  .group[data-side="right"] & {
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
  }

  @media (min-width: 640px) {
    & {
      display: flex;
    }
  }

  /* Second group */
  .in[data-side="left"] & {
    cursor: w-resize;
  }

  .in[data-side="right"] & {
    cursor: e-resize;
  }

  /* Third group */
  [data-side="left"][data-state="collapsed"] & {
    cursor: e-resize;
  }

  [data-side="right"][data-state="collapsed"] & {
    cursor: w-resize;
  }

  /* Fourth group */
  &:hover {
    .group[data-collapsible="offcanvas"] & {
      background-color: var(--sidebar);
    }
  }

  .group[data-collapsible="offcanvas"] & {
    transform: translateX(0);
  }

  .group[data-collapsible="offcanvas"] &::after {
    left: 100%;
  }

  /* Fifth group */
  [data-side="left"][data-collapsible="offcanvas"] & {
    right: -0.5rem;
  }

  /* Sixth group */
  [data-side="right"][data-collapsible="offcanvas"] & {
    left: -0.5rem;
  }
`;

const sidebarInsetStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  background-color: var(--background);

  @media (min-width: 768px) {
    &[data-variant="inset"] {
      margin: 0.5rem;
      margin-left: 0;
      border-radius: 0.75rem;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }

    &[data-variant="inset"][data-state="collapsed"] {
      margin-left: 0.5rem;
    }
  }
`;

const sidebarInputStyles = css`
  height: 2rem;
  width: 100%;
  background-color: var(--background);
  box-shadow: none;
`;

const sidebarHeaderStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const sidebarFooterStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const sidebarSeparatorStyles = css`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: auto;
  background-color: var(--sidebar-border);
`;

const sidebarContentStyles = css`
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;

  &[data-collapsible="icon"] {
    overflow: hidden;
  }
`;

const sidebarGroupStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  padding: 0.5rem;
`;

const sidebarGroupLabelStyles = css`
  & {
    color: rgba(var(--sidebar-foreground), 0.7);
    display: flex;
    height: 2rem;
    flex-shrink: 0;
    align-items: center;
    border-radius: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    outline: hidden;
    transition-property: margin, opacity;
    transition-duration: 200ms;
    transition-timing-function: linear;
  }

  &:focus-visible {
    --tw-ring-color: var(--sidebar-ring);
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  & > svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  /* Second group */
  .group[data-collapsible="icon"] & {
    margin-top: -2rem;
    opacity: 0;
  }
`;

const sidebarGroupActionStyles = css`
 /* First group - Button base styling */
  & {
    color: var(--sidebar-foreground);
    position: absolute;
    top: 0.875rem;
    right: 0.75rem;
    display: flex;
    aspect-ratio: 1 / 1;
    width: 1.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    padding: 0;
    outline: hidden;
    transition-property: transform;
  }

  &:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  &:focus-visible {
    --tw-ring-color: var(--sidebar-ring);
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  & > svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  /* Second group - Increased hit area for mobile */
  &::after {
    content: "";
    position: absolute;
    inset: -0.5rem;
  }

  @media (min-width: 768px) {
    &::after {
      display: none;
    }
  }

  /* Third group - Hide when parent has collapsible=icon */
  .group[data-collapsible="icon"] & {
    display: none;
  }
`;

const sidebarGroupContentStyles = css`
  width: 100%;
  font-size: 0.875rem;
`;

const sidebarMenuStyles = css`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
`;

const sidebarMenuItemStyles = css`
  position: relative;

  &.group\/menu-item {
    position: relative;
  }
`;

const sidebarMenuActionStyles = css`
  position: absolute;
  top: 0.375rem;
  right: 0.25rem;
  display: flex;
  aspect-ratio: 1;
  width: 1.25rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 0.375rem;
  color: var(--sidebar-foreground);
  outline: none;
  transition: transform;

  &:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  &:focus-visible {
    --tw-ring-color: var(--sidebar-ring);
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  & > svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -0.5rem;
  }

  @media (min-width: 768px) {
    &::after {
      display: none;
    }
  }

  &[data-size="sm"] {
    top: 0.25rem;
  }

  &[data-size="default"] {
    top: 0.375rem;
  }

  &[data-size="lg"] {
    top: 0.625rem;
  }

  &[data-collapsible="icon"] {
    display: none;
  }

  &[data-show-on-hover="true"] {
    opacity: 0;

    @media (min-width: 768px) {
      &[data-active="true"] {
        color: var(--sidebar-accent-foreground);
      }

      &:focus-within, &:hover, &[data-state="open"] {
        opacity: 1;
      }
    }
  }
`;

const sidebarMenuBadgeStyles = css`
  position: absolute;
  right: 0.25rem;
  display: flex;
  height: 1.25rem;
  min-width: 1.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0 0.25rem;
  color: var(--sidebar-foreground);
  font-size: 0.75rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  user-select: none;

  &[data-size="sm"] {
    top: 0.25rem;
  }

  &[data-size="default"] {
    top: 0.375rem;
  }

  &[data-size="lg"] {
    top: 0.625rem;
  }

  &[data-collapsible="icon"] {
    display: none;
  }

  &[data-active="true"] {
    color: var(--sidebar-accent-foreground);
  }
`;

const sidebarMenuSkeletonStyles = css`
  display: flex;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 0 0.5rem;
`;

const sidebarMenuSkeletonIconStyles = css`
  width: 1rem;
  height: 1rem;
  border-radius: 0.375rem;
`;

const sidebarMenuSkeletonTextStyles = css`
  height: 1rem;
  max-width: var(--skeleton-width);
  flex: 1;
`;

const sidebarMenuSubStyles = css`
  margin: 0 0.875rem;
  display: flex;
  min-width: 0;
  transform: translateX(1px);
  flex-direction: column;
  gap: 0.25rem;
  border-left: 1px solid var(--sidebar-border);
  padding: 0.125rem 0.625rem;

  &[data-collapsible="icon"] {
    display: none;
  }
`;

const sidebarMenuSubItemStyles = css`
  position: relative;

  &.group\/menu-sub-item {
    position: relative;
  }
`;

// Base styles
const sidebarMenuSubButtonBaseStyles = css`
  color: var(--sidebar-foreground);
  display: flex;
  height: 1.75rem;
  min-width: 0;
  transform: translateX(-1px);
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  border-radius: 0.375rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: hidden;

  &:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  &:active {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  &:focus-visible {
    --tw-ring-color: var(--sidebar-ring);
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  & > span:last-child {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    color: var(--sidebar-accent-foreground);
  }
`;

// Active state styles
const sidebarMenuSubButtonActiveStyles = css`
  &[data-active="true"] {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }
`;

// Small size styles
const sidebarMenuSubButtonSmSizeStyles = css`
  font-size: 0.75rem;
`;

// Medium size styles
const sidebarMenuSubButtonMdSizeStyles = css`
  font-size: 0.875rem;
`;

// Hidden when collapsible is icon
const sidebarMenuSubButtonCollapsibleIconStyles = css`
  .group[data-collapsible="icon"] & {
    display: none;
  }
`;

type SidebarContext = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed';

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cx(sidebarWrapperStyles, className)}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cx(sidebarStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className={cx(sidebarStyles, sidebarMobileStyles)}
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetTrigger>
              <Button variant="ghost" size="icon">
                <PanelLeftIcon />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
            </SheetTrigger>
          </SheetHeader>
          <div className={sidebarContentStyles}>{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cx(sidebarStyles, className)}
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div className={sidebarGapStyles} />
      <div
        className={cx(
          sidebarFixedStyles,
          side === 'left'
            ? leftSideStyles
            : rightSideStyles,
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? floatingInsetStyles
            : defaultVariantStyles,
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className={sidebarContentStyles}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cx(sidebarTriggerStyles, className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cx(sidebarRailStyles, className)}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cx(sidebarInsetStyles, className)}
      {...props}
    />
  );
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cx(sidebarInputStyles, className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cx(sidebarHeaderStyles, className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cx(sidebarFooterStyles, className)}
      {...props}
    />
  );
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cx(sidebarSeparatorStyles, className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cx(sidebarContentStyles, className)}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cx(sidebarGroupStyles, className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cx(sidebarGroupLabelStyles, className)}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cx(sidebarGroupActionStyles, className)}
      {...props}
    />
  );
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cx(sidebarGroupContentStyles, className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cx(sidebarMenuStyles, className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cx(sidebarMenuItemStyles, className)}
      {...props}
    />
  );
}

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}) {
  const Comp = asChild ? Slot : 'button';
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cx(
        sidebarButtonDefaultStyles,
        variant === 'outline' && sidebarButtonOutlineStyles,
        size === 'sm' && sidebarButtonSmallSizeStyles,
        size === 'lg' && sidebarButtonLargeSizeStyles,
        className
      )}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      data-show-on-hover={showOnHover}
      className={cx(sidebarMenuActionStyles, className)}
      {...props}
    />
  );
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cx(sidebarMenuBadgeStyles, className)}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean
}) {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cx(sidebarMenuSkeletonStyles, className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className={sidebarMenuSkeletonIconStyles}
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className={sidebarMenuSkeletonTextStyles}
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cx(sidebarMenuSubStyles, className)}
      {...props}
    />
  );
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cx(sidebarMenuSubItemStyles, className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cx(
        sidebarMenuSubButtonBaseStyles,
        sidebarMenuSubButtonActiveStyles,
        size === 'sm' && sidebarMenuSubButtonSmSizeStyles,
        size === 'md' && sidebarMenuSubButtonMdSizeStyles,
        sidebarMenuSubButtonCollapsibleIconStyles,
        className
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
