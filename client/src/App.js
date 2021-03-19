import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

import Navbar from "./componenets/layout/Navbar";
import Landing from "./componenets/layout/Landing";
import Alert from "./componenets/layout/Alert";
import Login from "./componenets/auth/Login";
import Register from "./componenets/auth/Register";
import Dashboard from "./componenets/dashboard/Dashboard";
import PrivateRoute from "./componenets/routing/PrivateRoute";
import CreateProfile from "./componenets/profile-forms/CreateProfile";
import EditProfile from "./componenets/profile-forms/EditProfile";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
