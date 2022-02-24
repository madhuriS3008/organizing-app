import React from "react";
import classes from "./Finance.module.css";

const Finance = () => {
  return (
    <ul className={classes.vertical}>
      <li>
        <a href="#">ExpenseTracker</a>
      </li>
      <li>
        <a href="#">Budget</a>
      </li>
    </ul>
  );
};

export default Finance;
