import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <span>
          <label htmlFor="fname">First Name</label>
          <input id="fname" type="text" />
        </span>
        <span>
          <label htmlFor="lname">Last Name</label>
          <input id="lname" type="text" />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" />
        </span>
        <span>
          <legend>Gender</legend>
          <input type="radio" name="male" id="genderMale" value="male" />
          <label htmlFor="genderMale"> Male</label>
          <input type="radio" name="female" id="genderFemale" value="female" />
          <label htmlFor="genderFemale"> Female</label>
        </span>
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="username">Username or Email</label>
        <input id="username" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button>Signup</button>
      </div>
    </form>
  );
};

export default Signup;
