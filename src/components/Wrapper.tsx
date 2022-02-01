import React from "react";
import classes from "./Wrapper.module.scss";

const Wrapper: React.FC = (props) => {
  return <section className={classes.wrapper}>{props.children}</section>;
};

export default Wrapper;
