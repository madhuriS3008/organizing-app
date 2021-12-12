import { Fragment } from "react";
import classes from "./Layout.module.css";

import MainNav from "./MainNav";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
      {/* <p className={classes.footer}> &copy; Copyright reserved</p> */}
    </Fragment>
  );
};

export default Layout;
