import classes from "./MainNav.module.css";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

function MainNav() {
  const authCtx = useContext(AuthContext);
  return (
    <header className={classes.header}>
      {!authCtx.login && (
        <Link to="/">
          <div className={classes.logo}>Organizing App</div>
        </Link>
      )}
      {authCtx.login && (
        <Link to="/home">
          <div className={classes.logo}>Many Odds To Organizing</div>
        </Link>
      )}
      <nav>
        <ul>
          {!authCtx.login && (
            <li>
              <Link to="/signup">
                <div className={classes.button}>Signup</div>
              </Link>
            </li>
          )}
          {authCtx.login && (
            <li>
              <NavLink activeClassName={classes.active} to="/my-pages">
                My Pages
              </NavLink>
            </li>
          )}
          {authCtx.login && (
            <li>
              <NavLink activeClassName={classes.active} to="/finances">
                Finances
              </NavLink>
            </li>
          )}
          {authCtx.login && (
            <li>
              <Link to="/logout">
                <div className={classes.button}>Logout</div>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
