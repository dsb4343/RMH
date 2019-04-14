//Requires
var mongoose = require('mongoose');

//Schema
var Schema = mongoose.Schema;

//Object
var DonationSchema = new Schema({
    lastName: {type: String, max: 100},
    firstName: {type: String, max: 100},
    donationType: {type: String, max: 10},
    donationDate: {type: Date, },
    donationAmount: {type: Number, },
    adoptionDate: {type: Date, },
    adoptionMessage: {type: String, },    
});

//Export for mongoose
module.exports = mongoose.model('Donation', DonationSchema);

//Virtuals