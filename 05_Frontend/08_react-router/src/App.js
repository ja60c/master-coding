import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Navigation from './components/Navigation'
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;

