import React from "react";
import classes from "./Input.module.scss";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

interface InputProps {
  type: string;
  name: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  inputOnly?: boolean;
  change: (value: number) => void;
}

const Input: React.FC<InputProps> = (props) => {
  if (props.inputOnly) {
    return (
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    );
  }
  return (
    <span className={classes.input_container}>
      <label htmlFor={props.name}>{props.label}</label>
      <span className={classes.input}>
        {props.icon && (
          <img
            className={classes.icon}
            src={props.icon === "dollar" ? dollarIcon : personIcon}
            alt="Input icon"
          />
        )}
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={(e) => props.change(+e.target.value)}
        />
      </span>
    </span>
  );
};

export default Input;
