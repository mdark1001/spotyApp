'use strict'

var mongoose = require('mongoose');
var paginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ArtistSchema = Schema({
  name: String,
  description: String,
  genre: String,
  country: String,
  image: String

});
ArtistSchema.statics.paginate = paginate;

module.exports = mongoose.model('Artist', ArtistSchema);
