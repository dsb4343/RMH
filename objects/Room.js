//Requires
var mongoose = require('mongoose');

//Schema
var Schema = mongoose.Schema;

//Object
var RoomSchema = new Schema({
    roomNumber: {type: String, max: 100},
    handicapAccess: {type: String, max: 100},
    status: {type: String, max: 10},

});


//Export for mongoose
module.exports = mongoose.model('Room', RoomSchema);

//Virtuals

