import React, { useContext, useState } from "react";
import classes from "./LoginForm.module.css";
import Card from "../ui/Card";
import AuthContext from "../../store/auth-context";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const emailIsValid = enteredEmail.includes("@");
  const emailHasError = !emailIsValid && emailIsTouched;
  const passwordIsValid = enteredPassword.trim().length >= 7;
  const passwordHasError = !passwordIsValid && passwordIsTouched;

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordBlurHandler = () => {
    setPasswordIsTouched(true);
  };

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail);
    console.log(enteredPassword);
    authCtx.onLogin();
    setEnteredEmail("");
    setEnteredPassword("");
    setEmailIsTouched(false);
    setPasswordIsTouched(false);
  };

  const emailClasses = emailHasError
    ? `${classes.form} ${classes.invalid}`
    : `${classes.form}`;
  const passwordClasses = passwordHasError
    ? `${classes.form} ${classes.invalid}`
    : `${classes.form}`;
  console.log(passwordClasses);
  return (
    <Card>
      <h1 className={classes.head}>Login</h1>
      <form onSubmit={formSubmissionHandler} className={classes.form}>
        <div className={emailClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailHasError && <p className={classes.error}>Enter Valid Email.</p>}
        </div>
        <div className={passwordClasses}>
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordHasError && (
            <p className={classes.error}>
              Password should be atleast 7 characters
            </p>
          )}
        </div>

        <div className={classes.actions}>
          <button disabled={!formIsValid}>Login</button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
