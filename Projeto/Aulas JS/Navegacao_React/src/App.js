import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
