var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

var Album = require('./album');
var Song = require('./songs');

module.exports.Album = Album;
module.exports.Song = Song;
//we are going to add all our modles here 