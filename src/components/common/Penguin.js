import React from "react";
import classes from "./Penguin.module.css";

const Penguin = () => {
  return (
    <div className={classes.penguin}>
      <div className={classes["penguin-bottom"]}>
        <div className={classes["right-hand"]}></div>
        <div className={classes["left-hand"]}></div>
        <div className={classes["right-feet"]}></div>
        <div className={classes["left-feet"]}></div>
      </div>
      <div className={classes["penguin-top"]}>
        <div className={classes["right-cheek"]}></div>
        <div className={classes["left-cheek"]}></div>
        <div className={classes["belly"]}></div>
        <div className={classes["right-eye"]}>
          <div className={classes["sparkle"]}></div>
        </div>
        <div className={classes["left-eye"]}>
          <div className={classes["sparkle"]}></div>
        </div>
        <div className={classes["blush-right"]}></div>
        <div className={classes["blush-left"]}></div>
        <div className={classes["beak-top"]}></div>
        <div className={classes["beak-bottom"]}></div>
      </div>
    </div>
  );
};

export default Penguin;
