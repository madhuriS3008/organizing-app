import classes from "./Mainpage.module.css";
import LoginForm from "./LoginForm";
import Penguin from "../common/Penguin";

const Mainpage = (props) => {
  return (
    <main className={classes.main}>
      <div>
        <h2>About App</h2>
        <p>
          Organising your things will become easy. Manage your time more
          effectively and stay on-track towards your goals.
        </p>
        <p>
          Organizing isn't about perfection. It's about efficiency, reducing
          stress and clutter,saving time and money, and improving your overall
          quality of life.
        </p>

        <p>
          Making sure to be on track for your plans is important than planning
          itself. Check goals, review and revise them frequently.
        </p>

        <p>
          Planning for professional, personal including physical and mental
          growth are needed to be kept in mind when creating goals.
        </p>
        <Penguin />
      </div>
      <div>
        <LoginForm onLogin={props.onLogin} />
      </div>
    </main>
  );
};

export default Mainpage;
