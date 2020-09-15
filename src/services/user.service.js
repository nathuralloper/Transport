const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getUsername(username) {
    return await _userRepository.getUsername(username);
  }
}

module.exports = UserService;
