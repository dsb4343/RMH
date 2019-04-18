var Person = require('../objects/Person');
//var Donation = require('../objects/Donation');
//var Guest = require('../objects/Guest');
//var Staff = require('../objects/Staff');
//var Patient = require('../objects/Patient');
//var async = require('async');
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

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
<<<<<<< HEAD
    async.parallel({
        person: function(callback){
            Person.find({}, 'person')
            .exec(callback);
        },
        donation: function(callback){
            Donation.find({}, 'donation')
            .exec(callback);
=======
    Person.find()
    .populate('person')
    .execute(function (err, results) {
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
            Guest.find({},"guest").exec(callback); //not sure what to find
        },
        patient: function(callback) {
            Patient.find({},"patient").exec(callback); //not sure what to find
        },
        staff: function(callback) {
            Staff.find({},"staff").exec(callback); //not sure what to find
>>>>>>> master
        },
        function (err, results) {
            if (err) {return next(err)};
            console.log(results);
            res.render('person_read', {
                title: 'Person Details',
                person: results.person,
                donation: results.donation
            })
        }
    });
    //res.send('NOT IMPLEMENTED: person detail: ' + req.params.id);
};

// Display person create form on GET.
exports.person_create_get = function(req, res) {
    Person.findById(req.params.id)
    .execute(function (err, results){
        if (err) {return next(err);}
        if (results==null) {
            res.redirect('/person/create');
        }
        console.log(results);
        res.render('person_create', {
            title: 'New Person',
            person: person
        });
    });
    //res.send('NOT IMPLEMENTED: person create GET');
};

// Handle person create on POST.
exports.person_create_post = [
    //Validation
    body('firstName').isLength({min: 1}).trim().withMessage('Missing First Name'),
    body('lastName').isLength({min: 1}).trim().withMessage('Missing Last Name'),
    body('email').isLength({min: 1}).trim().withMessage('Missing Email Address'),
    body('phone').isLength({min: 10}).trim().withMessage('Missing Phone Number'),
    sanitizeBody('firstName').trim().escape(),
    sanitizeBody('lastName').trim().escape(),
    sanitizeBody('phone').trim().escape(),
    sanitizeBody('email').trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('person_create', {
                title: 'New Participant Error',
                errors: errors.array()
            });
            return;
        }
        else {
            var person = new Person({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                cellPhone: req.body.cellPhone,
                homeAdress: req.body.homeAdress,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                emergencyContact: req.body.emergencyContact,
                emergencyPhone: req.body.emergencyPhone
            });
            person.save(function(err) {
                if (err) {return next(err)};
                res.redirect(person.url);  //redirect ????
            });
        }
    }
    //res.send('NOT IMPLEMENTED: person create POST');
];

// Display person delete form on GET.
exports.person_delete_get = function(req, res, next) {
    Person.findById(req.params.id)
    .populate('person')
<<<<<<< HEAD
    .execute(function(err,results) {
        if (err) {return next(err)};
        if (results==null) {res.redirect('/person')};
=======
    .populate('guest')
    .populate('patient')
    .populate('staff')
    .execute(function(err,results) {
        if (err) {return next(err)};
        //redirect will need updated url address-----------
        if (results==null) {res.redirect('/users/person')};
>>>>>>> master
        res.render('person_delete', {
            title: 'Delete Person',
            person: results
        });
    });
    //res.send('NOT IMPLEMENTED: person delete GET');
};

// Handle person delete on POST.
exports.person_delete_post = function(req, res, next) {
    Person.findByIdAndDelete(req.params.id, 
        function deletePerson(err) {
        if (err) return next(err);
<<<<<<< HEAD
        res.redirect('/user/Person');
=======
        //redirect will need updated url address--------------
        res.redirect('/users/person');
>>>>>>> master
    });
    //res.send('NOT IMPLEMENTED: person delete POST');
};

// Display person update form on GET.
exports.person_update_get = function(req, res) {
        Person.findById(req.params.id)
        .populate('person')
        .exec(callback);
        if (err) {return next(err)};
        res.render('person_update', {
            title: 'Update Person',
            person: results.person
        });
    //res.send('NOT IMPLEMENTED: person update GET');
};

// Handle person update on POST.
exports.person_update_post = [
    //Validation
    body('firstName').isLength({min: 1}).trim().withMessage('Missing First Name'),
    body('lastName').isLength({min: 1}).trim().withMessage('Missing Last Name'),
    body('email').isLength({min: 1}).trim().withMessage('Missing Email Address'),
    body('phone').isLength({min: 10}).trim().withMessage('Missing Phone Number'),
    sanitizeBody('firstName').trim().escape(),
    sanitizeBody('lastName').trim().escape(),
    sanitizeBody('phone').trim().escape(),
    sanitizeBody('email').trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('person_update', {
                title: 'Update Person Failed',
                _id: person._id,
                person: person,
                errors: errors.array(),
            });
        return;
        }
        else {
            var person = new Person({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                cellPhone: req.body.cellPhone,
                homeAdress: req.body.homeAdress,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                emergencyContact: req.body.emergencyContact,
                emergencyPhone: req.body.emergencyPhone,
                _id:req.params.id
            });
        };
    }
    //res.send('NOT IMPLEMENTED: person update POST');
];
