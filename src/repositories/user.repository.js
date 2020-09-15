const BaseRepository = require("./base.repository");
let _user = null;

class UserRepository extends BaseRepository {
  constructor({ User }) {
    console.log(11111, User);
    _user = User;
    super(User);
  }

  async getUsername(username) {
    return await _user.findOne({ username });
  }
}

module.exports = UserRepository;
