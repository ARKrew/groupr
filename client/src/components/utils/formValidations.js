import React from 'react';
import { Label } from 'semantic-ui-react';

export const required = value => (value ? undefined : 'Required');
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength25 = maxLength(25);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div style={{marginBottom: '0.5em'}}>
    <Label color="teal" pointing="below">{label}</Label>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span style={{ color: '#ff0000' }}>*{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
