import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  text: string;
  clicked: () => void;
  class?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const btnClasses = props.class
    ? `${classes.button} ${classes[props.class]}`
    : classes.button;
  return (
    <button className={btnClasses} onClick={props.clicked}>
      {props.text}
    </button>
  );
};

export default Button;
