import React from "react";
import classNames from "classnames";


const Input = React.forwardRef(({ suffix, size = "default", ...props }, ref) => {
  const classes = classNames(
    {
      "input-item": true,
      "has-icon": props.icon,
      "has-suffix": suffix,
      [`input-item-${size}`]: size,
    },
    props.className
  );

  const wrapperClasses = classNames({
    "input-wrapper": true,
    [`input-wrapper-${size}`]: size,
  });

  return (
    <div className={wrapperClasses}>
      <div className='input-icon'>{props.icon}</div>
      <input id={props.id ? props.id : props.name} ref={ref} {...props} className={classes} />
      {suffix && <div className='input-suffix'>{suffix}</div>}
    </div>
  );
});

const Textarea = React.forwardRef((props, ref) => {
  const classes = classNames(
    {
      "input-item": true,
      "input-item-textarea": true,
    },
    props.className
  );
  return (
    <div className='input-wrapper'>
      <textarea  ref={ref} {...props} className={classes}></textarea>
    </div>
  );
});

Input.Textarea = Textarea;

export { Textarea };
export default Input;
