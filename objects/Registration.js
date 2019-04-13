var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Registration.Schema = new Schema ({
    guest: {type: Schema.Types.ObjectId, ref: 'Guest'},
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    staff: {type: Schema.Types.ObjectId, ref: 'Staff'},
    room: {type: Schema.Types.ObjectId, ref: 'Room'},
    checkIn: {type: String, max: 10},
    checkOut: {type: String, max: 10},
    numbKeys: {type: String, max: 10},
    loans: {type: String, max: 100},
    comments: {type: String, max: 256}
});

module.exports = mongoose.model('Registration', RegistrationSchema);