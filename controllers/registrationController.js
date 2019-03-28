var Registration = require('../objects/Registration');
var Patient = require('../objects/Patient');
var Guest = require('../objects/Guest');
var Staff = require('../objects/Staff');
var Room = require('../objects/Room');

var async = require('async');

// Display list of all registrations.
exports.registration_list = function(req, res, next) {
    Registration.find({}, 'guest')
    .populate('guest')
    .exec(function (err, list_registrations){
        if (err) {return next(err); }
        res.render('registration_list', {title: 'Registration List', registration_list: list_registrations });
    });
};

// Display detail page for a specific registration.
exports.registration_read = function(req, res, next) {
    async.parallel({
        registration: function(callback) {
            Registration.findById(req.params.id)
            .populate('patient')
            .populate('guest')
            .populate('staff')
            .populate('room')
            .exec(callback)
        },
        patient: function(callback) {
            Registration.find({ 'patient': req.params.id })
            .exec(callback);
        },
        guest: function(callback) {
            Registration.find({ 'guest': req.params.id })
            .exec(callback);
        },
        staff: function(callback) {
            Registration.find({ 'staff': req.params.id })
            .exec(callback);
        },
        room: function(callback) {
            Registration.find({ 'room': req.params.id })
            .exec(callback);
        },
    
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.registration==null) {
            var err = new Error('Registration not found');
            err.status = 404;
            return next (err);
        }
        res.render('registration_detail', { title: 'Registration Detail', registration: results.registration, patient: results.patient, guest: results.guest, staff: results.staff, room: results.room });
    })
};

// Display registration create form on GET.
exports.registration_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: registration create GET');
};

// Handle registration create on POST.
exports.registration_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: registration create POST');
};

// Display registration delete form on GET.
exports.registration_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: registration delete GET');
};

// Handle registration delete on POST.
exports.registration_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: registration delete POST');
};

// Display registration update form on GET.
exports.registration_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: registration update GET');
};

// Handle registration update on POST.
exports.registration_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: registration update POST');
};