import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Mainpage from "./components/mainpage/Mainpage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Mainpage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
