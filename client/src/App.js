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

//Rutas
import RouteList from "./components/routes/RouteList";
import RouteCreate from "./components/routes/RouteCreate";
import RouteEdit from "./components/routes/RouteEdit";

//Bus
import BusCreate from "./components/bus/BusCreate";

//Driver
import DriverCreate from "./components/drivers/DriverCreate";

//Driver
import StationCreate from "./components/stations/StationCreate";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import BusList from "./components/bus/BusList";
import DriverList from "./components/drivers/DriverList";
import StationList from "./components/stations/StationList";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [isAuthenticated, setisAuthenticated] = useState(true);

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
                {/* Routes */}
                <Route
                  exact
                  path="/route/edit/:id"
                  component={RouteEdit}
                ></Route>
                <Route exact path="/route/new" component={RouteCreate}></Route>
                <Route exact path="/routes" component={RouteList}></Route>
                {/* Bus */}
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/bus" component={BusList}></Route>
                <Route exact path="/bus/new" component={BusCreate}></Route>
                {/* Station */}
                <Route exact path="/stations" component={StationList}></Route>
                <Route
                  exact
                  path="/station/new"
                  component={StationCreate}
                ></Route>
                {/* Driver */}
                <Route exact path="/drivers" component={DriverList}></Route>
                <Route
                  exact
                  path="/driver/new"
                  component={DriverCreate}
                ></Route>

                {/*
                <PrivateRoute
                  exact
                  path="/route/edit/:id"
                  component={RouteEdit}
                />
                {/* End Routes */}
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
