const { JwtHelper } = require("../helpers");
let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async SingUp(user) {
    const { username } = user;
    const userExist = await _userService.getUsername(username);
    if (userExist) {
      const error = new Error();
      error.status = 401;
      error.message = "User already exist";
      throw error;
    }

    return await _userService.create(user);
  }

  async SingIn(user) {
    const { username, password } = user;
    const userExist = await _userService.getUsername(username);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }

    const validPassword = userExist.comparePasswords(password);
    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "invalid password";
      throw error;
    }

    const userToEnconde = {
      username: userExist.username,
      id: userExist._id,
    };

    const token = JwtHelper.generateToken(userToEnconde);

    return { token, user: userExist };
  }
}

module.exports = AuthService;
