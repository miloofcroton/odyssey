import React from 'react';
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import { css, cx } from '@linaria/core';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';

import { Label } from './Label';

const formItemStyles = css`
  display: grid;
  gap: 0.5rem;
`;

const formLabelErrorStyles = css`
  &[data-error="true"] {
    color: var(--destructive-foreground);
  }
`;

const formDescriptionStyles = css`
  color: var(--muted-foreground);
  font-size: 0.875rem;
`;

const formMessageStyles = css`
  color: var(--destructive-foreground);
  font-size: 0.875rem;
`;

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
  }: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cx(formItemStyles, className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cx(formLabelErrorStyles, className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

const FormControl = ({ ...props }: React.ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

const FormDescription = ({ className, ...props }: React.ComponentProps<'p'>) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cx(formDescriptionStyles, className)}
      {...props}
    />
  );
};

const FormMessage = ({ className, ...props }: React.ComponentProps<'p'>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cx(formMessageStyles, className)}
      {...props}
    >
      {body}
    </p>
  );
};

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
