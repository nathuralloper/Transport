const BaseRepository = require("./base.repository");
let _bus = null;

class BusRepository extends BaseRepository {
  constructor({ Bus }) {
    _bus = Bus;
    super(Bus);
  }
}

module.exports = BusRepository;
