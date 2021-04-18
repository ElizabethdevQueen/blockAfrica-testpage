import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home"
import Activity from "./pages/Activity";
import Wallet from "./pages/Wallet";
import Market from "./pages/Market";
import Earn from "./pages/Earn";


export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/activity" component={Activity} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/market" component={Market} />
        <Route path="/earn" component={Earn} />
      </Switch>
    </Router>
  );
}
