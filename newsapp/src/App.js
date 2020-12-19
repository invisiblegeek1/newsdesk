import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./component";
import Readmore from "./readmore";
import {Foot} from "./footer";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact render={() => <Card title="" />} />
            <Route
              path="/business"
              exact
              component={() => <Card title="business" />}
            />
            <Route
              path="/science"
              exact
              component={() => <Card title="science" />}
            />
            <Route
              path="/entertainment"
              exact
              component={() => <Card title="entertainment" />}
            />
            <Route
              path="/health"
              exact
              component={() => <Card title="health" />}
            />
            <Route
              path="/technology"
              exact
              component={() => <Card title="technology" />}
            />
            <Route
              path="/sports"
              exact
              component={() => <Card title="sports" />}
            />
            <Route path="/search/:id" exact component={Card} />
            <Route path="/readmore/:id" exact component={Readmore} />
          </Switch>
        </div>
      </div>
      <Foot />
    </Router>
  );
}

export default App;
