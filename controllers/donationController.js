var Donation = require('../objects/Donation');

// Display list of all donations.
exports.donation_list = function(req, res) {
    res.send('NOT IMPLEMENTED: donation list');
};

// Display detail page for a specific donation.
exports.donation_read = function(req, res) {
    res.send('NOT IMPLEMENTED: donation detail: ' + req.params.id);
};

// Display donation create form on GET.
exports.donation_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: donation create GET');
};

// Handle donation create on POST.
exports.donation_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: donation create POST');
};

// Display donation delete form on GET.
exports.donation_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: donation delete GET');
};

// Handle donation delete on POST.
exports.donation_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: donation delete POST');
};

// Display donation update form on GET.
exports.donation_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: donation update GET');
};

// Handle donation update on POST.
exports.donation_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: donation update POST');
};