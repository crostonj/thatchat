var mongoose = require("mongoose");
var mongooseUniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

var schema = Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, ref: 'Message' },
    messages 
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);