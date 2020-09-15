const BaseService = require("./base.service");
let _driverRepository = null;

class DriverService extends BaseService {
  constructor({ DriverRepository }) {
    _driverRepository = DriverRepository;
    super(DriverRepository);
  }
}

module.exports = DriverService;
