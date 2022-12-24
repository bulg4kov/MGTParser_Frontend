import React from "react";
import classes from "./ButtonText.module.scss";

export default function ButtonText({ title, callback }) {
  return (
    <button className={classes.ButtonText} value={title} onClick={callback}>
      {title}
    </button>
  );
}
