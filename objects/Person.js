//Requires
var mongoose = require('mongoose');

//Schema
var Schema = mongoose.Schema;

//Object
var PersonSchema = new Schema({
    lastName: {type: String, max: 100, required: true},
    firstName: {type: String, max: 100, required: true},
    phone: {type: Number, max: 10},
    email: {type: String, },
    street: {type: String, },
    city: {type: String, },
    state: {type: String, },
    zip: {type: String, },
    emergencyContact: {type: String, },
    emergencyPhone: {type: String, }
});

//Export for mongoose
module.exports = mongoose.model('Person', PersonSchema);

//Virtuals

