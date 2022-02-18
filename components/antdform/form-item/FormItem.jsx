import React from 'react';
import classNames from 'classnames';

export default function FormItem({ children, label, htmlFor, error, ...props }) {
  const formItemClasses = classNames({
    'form-item': true,
    'has-error': error && error.message,
  });

  const err =
    error && typeof error === 'string'
      ? error
      : error &&
        typeof error === 'object' &&
        ((error.message && typeof error.message === 'string') || error.message.message || error);

  return (
    <label className={formItemClasses} htmlFor={htmlFor}>
      <div className={`form-item-label`}>
        {label}
        <div className='form-item-error'>{error?.message}</div>
      </div>
      <div className={`form-item-input`}>{children}</div>
    </label>
  );
}
