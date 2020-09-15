const BaseRepository = require("./base.repository");
let _driver = null;

class DriverRepository extends BaseRepository {
  constructor({ Driver }) {
    _driver = Driver;
    super(Driver);
  }
}

module.exports = DriverRepository;
