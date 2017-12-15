var mongoose = require('mongoose');
var userschema = require('../scheamas/user');

module.exports = mongoose.model("user",userschema);