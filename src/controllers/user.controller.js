let _userSevice = null;

class UserController {
  constructor({ UserService }) {
    _userSevice = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _userSevice.get(userId);
    return res.send(user);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const users = await _userSevice.getAll(pageSize, pageNum);
    return res.send(users);
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const updatedUser = await _userSevice.update(userId, body);
    return res.send(updatedUser);
  }

  async delete(req, res) {
    const { userId } = req.params;
    const deletedUser = await _userSevice.delete(userId);
    return res.send(deletedUser);
  }
}

module.exports = UserController;
