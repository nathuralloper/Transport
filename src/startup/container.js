const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");
const app = require(".");

//Routes
const { AuthRoutes, UserRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

//Services
const { AuthService, UserService } = require("../services");

//Repositories
const { UserRepository } = require("../repositories");

//Models
const { Bus, Driver, User } = require("../models");

//Controllers
const { AuthController, UserController } = require("../controllers");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Driver: asValue(Driver),
    Bus: asValue(Bus),
  })
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  });

module.exports = container;
