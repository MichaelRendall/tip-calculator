import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  text: string;
  class?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const btnClasses = props.class
    ? `${classes.button} ${classes[props.class]}`
    : classes.button;
  return <button className={btnClasses}>{props.text}</button>;
};

export default Button;
