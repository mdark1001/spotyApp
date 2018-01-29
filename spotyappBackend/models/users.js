'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  nombre: String,
  apellidop: String,
  apellidom: String,
  id_estado: String,
  email: String,
  password: String,
  role: String,
  image: String
});


module.exports = mongoose.model('User', UserSchema);
