import classes from "./Mainpage.module.css";
import LoginForm from "./LoginForm";

const Mainpage = (props) => {
  return (
    <div>
      <div className={classes.block}>
        <h2>About App</h2>
        <p>
          Organising your things will become easy. Manage your time more
          effectively and stay on-track towards your goals.
        </p>
      </div>
      <div className={classes.block}>
        <LoginForm onLogin={props.onLogin} />
      </div>
    </div>
  );
};

export default Mainpage;
