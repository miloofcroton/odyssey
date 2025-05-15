import { css } from '@linaria/core';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const toastStyles = css`
  &.toast {
    background-color: var(--background);
    color: var(--foreground);
    border: 1px solid var(--border);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  & .description {
    color: var(--muted-foreground);
  }

  & .action-button {
    background-color: var(--primary);
    color: var(--primary-foreground);
    font-weight: 500;
  }

  & .cancel-button {
    background-color: var(--muted);
    color: var(--muted-foreground);
    font-weight: 500;
  }
`;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className={toastStyles}
      toastOptions={{
        classNames: {
          toast: 'toast',
          description: 'description',
          actionButton: 'action-button',
          cancelButton: 'cancel-button',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
