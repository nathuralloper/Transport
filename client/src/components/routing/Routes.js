import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../routing/PrivateRoute";

//Components
import Layout from "../layout/Layout";
import Dashboard from "../dashboard/Dashboard";
import Login from "../auth/Login";
import Alert from "../layout/Alert";

//Rutas
import RouteList from "../routes/RouteList";
import RouteCreate from "../routes/RouteCreate";
import RouteEdit from "../routes/RouteEdit";

//Bus
import BusCreate from "../bus/BusCreate";
import BusList from "../bus/BusList";

//Driver
import DriverCreate from "../drivers/DriverCreate";
import DriverList from "../drivers/DriverList";

//Statio
import StationCreate from "../stations/StationCreate";
import StationList from "../stations/StationList";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const Routes = ({ auth: { isAuthenticated } }) => {
  //{isAuthenticated ? _layout : ""}
  return (
    <Fragment>
      <div
        className={
          isAuthenticated
            ? "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
            : ""
        }
      >
        <Navbar />
        <div className={isAuthenticated ? "app-main" : ""}>
          <Sidebar />
          <Switch>
            {/* Dashboard */}
            <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
            {/* Routes */}
            <PrivateRoute
              exact
              path="/routes"
              component={RouteList}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/route/new"
              component={RouteCreate}
            ></PrivateRoute>
            {/* Bus */}
            <PrivateRoute exact path="/bus" component={BusList}></PrivateRoute>
            <PrivateRoute
              exact
              path="/bus/new"
              component={BusCreate}
            ></PrivateRoute>
            {/* Station */}
            <PrivateRoute
              exact
              path="/stations"
              component={StationList}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/station/new"
              component={StationCreate}
            ></PrivateRoute>

            {/* Driver */}
            <PrivateRoute
              exact
              path="/drivers"
              component={DriverList}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/driver/new"
              component={DriverCreate}
            ></PrivateRoute>
          </Switch>
        </div>
      </div>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Fragment>
  );
};

Routes.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Routes);
