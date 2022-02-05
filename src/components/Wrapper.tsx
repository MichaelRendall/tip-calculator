import React from "react";
import classes from "./Wrapper.module.scss";

interface WrapperProps {
  class: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return <section className={classes[props.class]}>{props.children}</section>;
};

export default Wrapper;
