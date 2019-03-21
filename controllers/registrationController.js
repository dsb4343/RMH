var Registration = require('../objects/Registration');

// Display list of all registrations.
exports.registration_list = function(req, res) {
    res.send('NOT IMPLEMENTED: registration list');
};

// Display detail page for a specific registration.
exports.registration_read = function(req, res) {
    res.send('NOT IMPLEMENTED: registration detail: ' + req.params.id);
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