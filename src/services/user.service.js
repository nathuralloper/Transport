const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    console.log(22222, UserRepository);
    _userRepository = UserRepository;
    super(UserRepository);
  }

  async getUserByUsername(username) {
    return await _userRepository.getUsername(username);
  }
}

module.exports = UserService;
