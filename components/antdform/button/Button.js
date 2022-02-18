import React from "react";
import className from "classnames";


const Button = React.forwardRef(({ children, icon, type = "button", face = "default", disabled = false, block, loading = false, size = "medium", ...props }, ref) => {
  icon = loading ? <i className='icon-loading'></i> : icon;

  const classes = className({
    button: true,
    block: block,
    loading: loading,
    "has-icon": icon,
    "has-child": children,
    [`size-${size}`]: size,
    [`button-face-${face}`]: face,
  });

  return (
    <button ref={ref} type={type} {...props} className={classes} disabled={disabled || loading ? true : false}>
      {icon && (
        <div className={`button-icon`}>
          <div className='icon'>{icon}</div>
        </div>
      )}
      {children && <div className={`button-child`}>{children}</div>}
    </button>
  );
});

export default Button;
