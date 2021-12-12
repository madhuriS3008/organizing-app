import classes from "./MainNav.module.css";
import { Link, NavLink } from "react-router-dom";

function MainNav() {
  return (
    <header className={classes.header}>
      <Link to="/home">
        <div className={classes.logo}>Organizing App</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/signup">
              <div className={classes.button}>Signup</div>
            </Link>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/my-pages">
              My Pages
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/finances">
              Finances
            </NavLink>
          </li>
          <li>
            <Link to="/logout">
              <div className={classes.button}>Logout</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
