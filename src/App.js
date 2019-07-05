import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import bgImage from "./components/images/3.jpg";
import Store from "./components/Store/Store";
import Items from "./components/Items/Items";
function App() {
  // CSSden background image koyamadığım için inline style şeklinde koydum.
  // let style = {
  //   backgroundImage: `url(${bgImage})`
  // };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/items" component={Items} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
