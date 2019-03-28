var Guest = require('../objects/Guest');

// Display list of all guests.
exports.guest_list = function(req, res) {
    res.send('NOT IMPLEMENTED: guest list');
};

// Display detail page for a specific guest.
exports.guest_read = function(req, res) {
    res.send('NOT IMPLEMENTED: guest detail: ' + req.params.id);
};

// Display guest create form on GET.
exports.guest_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: guest create GET');
};

// Handle guest create on POST.
exports.guest_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: guest create POST');
};

// Display guest delete form on GET.
exports.guest_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: guest delete GET');
};

// Handle guest delete on POST.
exports.guest_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: guest delete POST');
};

// Display guest update form on GET.
exports.guest_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: guest update GET');
};

// Handle guest update on POST.
exports.guest_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: guest update POST');
};