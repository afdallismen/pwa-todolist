const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const todosService = require('./services/todos.service');
const mongooseErrorHook = require('./hooks/mongooseError.hook');
 
const app = express(feathers());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/pwa-todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.configure(express.rest());

app.use('/todos', todosService);

app.use('*', (req, res) => {
  res.send('Hello World !');
});

app.service('/todos').hooks(mongooseErrorHook);

app.listen(3000).on('listening', () => {
  console.log('Server listening on localhost:3000')
})

