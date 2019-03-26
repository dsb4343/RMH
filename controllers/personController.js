var Person = require('../objects/Person');

// Display list of all persons.
exports.person_list = function(req, res, next) {
    Person.find()
    .sort([['lastName', 'ascending']])
    .execute(function (err, list_person) {
        if (err) {return next(err)};
        res.render('person_list', { title: 'All Person', person_list: list_person});
    });
    //res.send('NOT IMPLEMENTED: person list');
};

// Display detail page for a specific person.
exports.person_read = function(req, res, next) {
    Person.find()
    .exec(function (err, results) {
        if (err) {return next(err)};
        if (results == null) {
            var err = new Error('Person not found');
            err.status = 404;
            return next(err)
        };
        console.log(results);
        res.render('person_read', {
            title: "Person Details",
            person: results})
    })
    //res.send('NOT IMPLEMENTED: person detail: ' + req.params.id);
};

// Display person create form on GET.
exports.person_create_get = function(req, res) {
    async.parallel({
        guest: function(callback) {
            Guest.find({},"xx").exec(callback);
        },
        patient: function(callback) {
            Patient.find({},"xx").exec(callback);
        },
        staff: function(callback) {
            Staff.find({},"xx").exec(callback);
        },
        function (err, results) {
            if (err) {return next(err);}
            console.log(results);
            res.render('person_create', {
                title: 'New Person',
                guest: results.guest,
                patient: result.patient,
                staff: result.patient
            });
        }
        
    })
    //res.send('NOT IMPLEMENTED: person create GET');
};

// Handle person create on POST.
exports.person_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: person create POST');
};

// Display person delete form on GET.
exports.person_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: person delete GET');
};

// Handle person delete on POST.
exports.person_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: person delete POST');
};

// Display person update form on GET.
exports.person_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: person update GET');
};

// Handle person update on POST.
exports.person_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: person update POST');
};