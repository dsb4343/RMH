var Staff = require('../objects/Staff');

// Display list of all staffs.
exports.staff_list = function(req, res) {
    Staff.find()
    .populate('staff')
    .exec(function (err, list_staffinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('staffinstance_list', { title: 'All Staff', staffinstance_list: list_staffinstances });
    });
};

// Display detail page for a specific staff.
exports.staff_read = function(req, res) {

   Staff.findById(req.params.id)
    .exec(function (err, results) {
        if (err) {return next(err)};
        if (results == null) {
            var err = new Error('Staff is not found');
            err.status = 404;
            return next(err)
        };
        console.log(results);
        res.render('staff_read', {
            title: "Staff Details",
            staff: results})
    })
};

// Display staff create form on GET.
exports.staff_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: staff create GET');
};

// Handle staff create on POST.
exports.staff_create_post = function(req, res) {

  //Validation
  body('lastName').isLength({min: 1}).trim().withMessage('Missing Last Name'),
  body('firstName').isLength({min: 1}).trim().withMessage('Missing First Name'),
  body('phone').isLength({min: 1}).trim().withMessage('Missing Phone Number'),
  sanitizeBody('lastName').trim().escape(),
  sanitizeBody('firstName').trim().escape(),
  sanitizeBody('phone').trim().escape(),

  (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          res.render('staff_create', {
              title: 'New Participant Error',
              errors: errors.array()
          });
          return;
      }
      else {
          var staff = new Staff({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            phone: req.body.phone,
            employeeStatus: req.body.employeeStatus,
            startDate: req.body.startDate,
            endDate: req.body.endDate
          });
          staff.save(function(err) {
              if (err) {return next(err)};
              res.redirect(participant.url);
          });
      }
  }

};

// Display staff delete form on GET.
exports.staff_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: staff delete GET');
};

// Handle staff delete on POST.
exports.staff_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: staff delete POST');
};

// Display staff update form on GET.
exports.staff_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: staff update GET');
};

// Handle staff update on POST.
exports.staff_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: staff update POST');
};