//Requires
var mongoose = require('mongoose');

//Schema
var Schema = mongoose.Schema;

//Object
var StaffSchema = new Schema({
    employeeStatus: {type: String, max: 10},
    startDate: {type: String, },
    endDate: {type: String, }
});

//Export for mongoose
module.exports = mongoose.model('Staff', StaffSchema);

//Virtuals