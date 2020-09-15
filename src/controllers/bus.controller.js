let _busSevice = null;

class BusController {
  constructor({ BusService }) {
    _busSevice = BusService;
  }

  async get(req, res) {
    const { busId } = req.params;
    const bus = await _busSevice.get(busId);
    return res.send(bus);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const buses = await _busSevice.getAll(pageSize, pageNum);
    return res.send(buses);
  }

  async create(req, res) {
    const { body } = req;
    const createdBus = await _busSevice.create(body);
    return res.send(createdBus);
  }

  async update(req, res) {
    const { body } = req;
    const { busId } = req.params;
    const updatedBus = await _busSevice.update(busId, body);
    return res.send(updatedBus);
  }

  async delete(req, res) {
    const { busId } = req.params;
    const deletedBus = await _busSevice.delete(busId);
    return res.send(deletedBus);
  }
}

module.exports = BusController;
