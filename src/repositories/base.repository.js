class BaseRepository {
  constructor(model) {
    this._model = model;
  }

  async get(id) {
    return await this._model.findById(id);
  }

  async getAll(pageSize = 5, pageNum = 1) {
    const skips = pageSize * (pageNum - 1);
    return await this._model.find().skip(skips).limit(pageSize);
  }

  async create(entity) {
    return await this._model.create(entity);
  }

  async update(id, entity) {
    return await this._model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    await this._model.findByIdAndDelete(id);
    return true;
  }
}

module.exports = BaseRepository;
