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
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="mt-20 sm:mt-24">
        <Switch>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/applying">
            <Applying />
          </Route>
          <Route path="/volunteering">
            <Volunteering />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Redirect to="/overview" />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
