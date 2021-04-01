import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { LOGOUT } from "./actions/types";

import Navbar from "./componenets/layout/Navbar";
import Landing from "./componenets/layout/Landing";
import Alert from "./componenets/layout/Alert";
import Login from "./componenets/auth/Login";
import Register from "./componenets/auth/Register";
import Dashboard from "./componenets/dashboard/Dashboard";
import PrivateRoute from "./componenets/routing/PrivateRoute";
import CreateProfile from "./componenets/profile-forms/CreateProfile";
import EditProfile from "./componenets/profile-forms/EditProfile";
import AddExperience from "./componenets/profile-forms/AddExperience";
import AddEducation from "./componenets/profile-forms/AddEducation";
import Profiles from "./componenets/profiles/Profiles";
import Profile from "./componenets/profile/Profile";
import Posts from "./componenets/posts/Posts";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
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
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
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
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
