import { Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'

function Routes() {
  return(
    <>
      <Route path="/about" component={ About }/>
      <Route path="/users" component={ Users }/>
      <Route exact path="/" component={ Home }/>
    </>
  );
}

export default Routes;