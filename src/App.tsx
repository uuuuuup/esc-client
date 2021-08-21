import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Applying } from "./pages/Applying/Applying";
import { Overview } from "./pages/Overview/Overview";
import { Volunteering } from "./pages/Volunteering/Volunteering";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/Overview">
          <Overview />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Applying">
          <Applying />
        </Route>
        <Route path="/Volunteering">
          <Volunteering />
        </Route>
        <Redirect to="/Overview" />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
