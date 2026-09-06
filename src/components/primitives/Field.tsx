import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

interface BaseFieldProps {
  label?: string;
  hint?: string;
  error?: string;
  errorId?: string;
}

export function FieldLabel({
  htmlFor,
  children,
  required,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="ds-label" {...rest}>
      {children}
      {required && <span className="text-charcoal-500 ml-1">*</span>}
    </label>
  );
}

export interface InputProps extends BaseFieldProps, InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}

export function FieldInput({
  label,
  hint,
  error,
  errorId,
  id,
  className = '',
  inputClassName = '',
  required,
  ...rest
}: InputProps) {
  const inputId = id ?? rest.name;
  return (
    <div className={`ds-field ${className}`}>
      {label && <FieldLabel htmlFor={inputId} required={required}>{label}</FieldLabel>}
      <input
        id={inputId}
        className={`ds-input ${inputClassName}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId ?? `${inputId}-err` : hint ? `${inputId}-hint` : undefined}
        {...rest}
      />
      {error ? (
        <p id={errorId ?? `${inputId}-err`} className="ds-error" role="alert">{error}</p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="ds-hint">{hint}</p>
      ) : null}
    </div>
  );
}

export interface TextareaProps extends BaseFieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaClassName?: string;
}

export function FieldTextarea({
  label,
  hint,
  error,
  errorId,
  id,
  className = '',
  textareaClassName = '',
  required,
  ...rest
}: TextareaProps) {
  const inputId = id ?? rest.name;
  return (
    <div className={`ds-field ${className}`}>
      {label && <FieldLabel htmlFor={inputId} required={required}>{label}</FieldLabel>}
      <textarea
        id={inputId}
        className={`ds-textarea ${textareaClassName}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId ?? `${inputId}-err` : hint ? `${inputId}-hint` : undefined}
        {...rest}
      />
      {error ? (
        <p id={errorId ?? `${inputId}-err`} className="ds-error" role="alert">{error}</p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="ds-hint">{hint}</p>
      ) : null}
    </div>
  );
}

export interface SelectProps extends BaseFieldProps, SelectHTMLAttributes<HTMLSelectElement> {
  selectClassName?: string;
  children: ReactNode;
}

export function FieldSelect({
  label,
  hint,
  error,
  errorId,
  id,
  className = '',
  selectClassName = '',
  required,
  children,
  ...rest
}: SelectProps) {
  const inputId = id ?? rest.name;
  return (
    <div className={`ds-field ${className}`}>
      {label && <FieldLabel htmlFor={inputId} required={required}>{label}</FieldLabel>}
      <select
        id={inputId}
        className={`ds-select ${selectClassName}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId ?? `${inputId}-err` : hint ? `${inputId}-hint` : undefined}
        {...rest}
      >
        {children}
      </select>
      {error ? (
        <p id={errorId ?? `${inputId}-err`} className="ds-error" role="alert">{error}</p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="ds-hint">{hint}</p>
      ) : null}
    </div>
  );
}

export function Checkbox({
  id,
  name,
  label,
  className = '',
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) {
  const inputId = id ?? name;
  return (
    <label htmlFor={inputId} className={`ds-check ${className}`}>
      <input id={inputId} name={name} type="checkbox" {...rest} />
      <span>{label}</span>
    </label>
  );
}
