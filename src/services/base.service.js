class BaseService {
  constructor(repository) {
    this._repository = repository;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const currentEntity = await this._repository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    return currentEntity;
  }

  async getAll(pageSize, pageNum) {
    return await this._repository.getAll(pageSize, pageNum);
  }

  async create(entity) {
    return await this._repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    return await this._repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    return await this._repository.delete(id);
  }
}

module.exports = BaseService;
