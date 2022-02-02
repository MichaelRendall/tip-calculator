import React from "react";
import classes from "./Input.module.scss";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

interface InputProps {
  type: string;
  label: string;
  icon: string;
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <span className={classes.input_container}>
      <label htmlFor={props.name}>{props.label}</label>
      <span className={classes.input}>
        <img
          className={classes.icon}
          src={props.icon === "dollar" ? dollarIcon : personIcon}
          alt="Input icon"
        />
        <input type={props.type} name={props.name} />
      </span>
    </span>
  );
};

export default Input;
