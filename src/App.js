import { Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/Layout";
import LandingPage from "./pages/Landing";
import SignupPage from "./pages/Signup";
import Home from "./pages/Home";
import FinancesPage from "./pages/Finances";
import MyPages from "./pages/MyPages";

function App() {
  return (
    <Layout>
      {/* <h1>Welcome</h1> */}
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/finances">
          <FinancesPage />
        </Route>
        <Route path="/my-pages">
          <MyPages />
        </Route>

        <Route path="/" exact>
          <LandingPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
