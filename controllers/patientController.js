var Patient = require('../objects/Patient');

// Display list of all patients.
exports.patient_list = function(req, res) {
    res.send('NOT IMPLEMENTED: patient list');
};

// Display detail page for a specific patient.
exports.patient_read = function(req, res) {
    res.send('NOT IMPLEMENTED: patient detail: ' + req.params.id);
};

// Display patient create form on GET.
exports.patient_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: patient create GET');
};

// Handle patient create on POST.
exports.patient_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: patient create POST');
};

// Display patient delete form on GET.
exports.patient_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: patient delete GET');
};

// Handle patient delete on POST.
exports.patient_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: patient delete POST');
};

// Display patient update form on GET.
exports.patient_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: patient update GET');
};

// Handle patient update on POST.
exports.patient_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: patient update POST');
};