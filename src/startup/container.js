const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const {
  AuthService,
  UserService,
  BusService,
  DriverService,
} = require("../services");

// controllers
const {
  AuthController,
  UserController,
  BusController,
  DriverController,
} = require("../controllers");

// routes
const {
  AuthRoutes,
  UserRoutes,
  BusRoutes,
  DriverRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { Bus, Driver, User } = require("../models");

// repositories
const {
  UserRepository,
  BusRepository,
  DriverRepository,
} = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    BusService: asClass(BusService).singleton(),
    DriverService: asClass(DriverService).singleton(),
  })
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    BusController: asClass(BusController.bind(BusController)).singleton(),
    DriverController: asClass(
      DriverController.bind(DriverController)
    ).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    BusRoutes: asFunction(BusRoutes).singleton(),
    DriverRoutes: asFunction(DriverRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Driver: asValue(Driver),
    Bus: asValue(Bus),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    BusRepository: asClass(BusRepository).singleton(),
    DriverRepository: asClass(DriverRepository).singleton(),
  });

module.exports = container;
