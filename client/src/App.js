import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./action/auth";
import setAuthToken from "./utils/setAuthToken";

//Components
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import Alert from "./components/layout/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [isAuthenticated, setisAuthenticated] = useState(true);
  console.log(isAuthenticated);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <Navbar />
            <div className="app-main">
              <Sidebar />
              <Alert />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
