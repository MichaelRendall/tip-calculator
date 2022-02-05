import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
