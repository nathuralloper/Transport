let _driverSevice = null;

class DriverController {
  constructor({ DriverService }) {
    _driverSevice = DriverService;
  }

  async get(req, res) {
    const { driverId } = req.params;
    const driver = await _busSevice.get(driverId);
    return res.send(driver);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const drivers = await _driverSevice.getAll(pageSize, pageNum);
    return res.send(drivers);
  }

  async create(req, res) {
    const { body } = req;
    const createdDriver = await _driverSevice.create(body);
    return res.send(createdDriver);
  }

  async update(req, res) {
    const { body } = req;
    const { driverId } = req.params;
    const updatedDriver = await _driverSevice.update(driverId, body);
    return res.send(updatedDriver);
  }

  async delete(req, res) {
    const { driverId } = req.params;
    const deletedDriver = await _driverSevice.delete(driverId);
    return res.send(deletedDriver);
  }
}

module.exports = DriverController;
