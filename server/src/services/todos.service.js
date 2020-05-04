const Todos = require('../models/todos.model.js');

const find = async (params) => {
  return Todos.find({});
};

const get = async (id, params) => {
  return Todos.findOne({ id: _id });
};

const create = async (data, params) => {
  return Todos.create(data);
};

const update = async (id, data, params) => {
  return Todos.findByIdAndUpdate(id, { $set: data }, { new: true });
};

const patch = async (id, data, params) => {
  return Todos.findByIdAndUpdate(id, { $set: data }, { new: true });
};

const remove = async (id, params) => {
  return Todos.findByIdAndRemove(id);
};

module.exports = {
  find,
  get,
  create,
  update,
  patch,
  remove
};

