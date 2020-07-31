import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./containers/About";
import Discover from "./containers/Discover";
import Search from "./containers/Search";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </Router>
  );
}

export default App;
