var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RegistrationSchema = new Schema ({
    guest: {type: Schema.Types.ObjectId, ref: 'Person'},
    patient: {type: String, max:25},
    patientLoc: {type: String, max: 15},
    staff: {type: String, max:25},
    room: {type: Schema.Types.ObjectId, ref: 'Room'},
    checkIn: {type: String, max: 10},
    checkOut: {type: String, max: 10},
    vehicle: { type: String, max:15},
    plateNum: {type: String, max: 10},
    numbKeys: {type: String, max: 10},
    loans: {type: String, max: 100},
    comments: {type: String, max: 256}
});

RegistrationSchema
.virtual('url')
.get(function(){
    return '/users/Registration' + this._id;
});

module.exports = mongoose.model('Registration', RegistrationSchema);