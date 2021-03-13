import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./componenets/layout/Navbar";
import Landing from "./componenets/layout/Landing";
import Alert from "./componenets/layout/Alert";
import Login from "./componenets/auth/Login";
import Register from "./componenets/auth/Register";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
