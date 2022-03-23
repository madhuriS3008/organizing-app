import React from "react";
import classes from "./Finance.module.css";

const Finance = () => {
  return (
    <aside>
      <ul className={classes.vertical}>
        <li>
          <a href="#">ExpenseTracker</a>
        </li>
        <li>
          <a href="#">Budget</a>
        </li>
      </ul>
    </aside>
  );
};

export default Finance;
