const mongoose = require('mongoose');
const MongooseErrors = require('mongoose-errors');

const TodosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: Number,
    default: 0
  }
});

TodosSchema.plugin(MongooseErrors);

module.exports = mongoose.model('Todos', TodosSchema);

