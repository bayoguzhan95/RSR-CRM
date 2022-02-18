import React from "react";
import classnames from "classnames";


const Card = React.forwardRef(({ children = <div></div>, hoverEffect = undefined, face = "default", ...props }, ref) => {
  const classes = classnames({
    "card-wrapper": true,
    "has-hover-effect": hoverEffect,
    [`face-${face}`]: face
  });
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

export default Card;
