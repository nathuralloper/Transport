const BaseService = require("./base.service");
let _busRepository = null;

class BusService extends BaseService {
  constructor({ BusRepository }) {
    _busRepository = BusRepository;
    super(BusRepository);
  }
}

module.exports = BusService;
