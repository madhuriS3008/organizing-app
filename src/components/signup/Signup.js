import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h3>Signup</h3>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="fname">First Name</label>
            <input id="fname" type="text" />
          </div>
          <div className={classes.control}>
            <label htmlFor="lname">Last Name</label>
            <input id="lname" type="text" />
          </div>
          <div className={classes.control}>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" />
          </div>
          <div className={classes["radio-input"]}>
            <h4>Gender</h4>
            <span>
              <input type="radio" name="male" id="genderMale" value="male" />
              <label htmlFor="genderMale"> Male</label>
            </span>
            <span>
              <input
                type="radio"
                name="female"
                id="genderFemale"
                value="female"
              />
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
          <div className={classes.actions}>
            <button>Signup</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
