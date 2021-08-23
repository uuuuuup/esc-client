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
      <div className="mt-16 sm:mt-24">
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
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
