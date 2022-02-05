import React from "react";
import classes from "./Total.module.scss";

interface TotalProps {
  text: string;
  figure: number;
}

const Total: React.FC<TotalProps> = (props) => {
  return (
    <div className={classes.Total}>
      <span>
        <p>{props.text}</p>
        <small>/ person</small>
      </span>
      <strong>&#36;{props.figure}</strong>
    </div>
  );
};

export default Total;
