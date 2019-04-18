var Room = require('../objects/Room');

// Display list of all rooms.
exports.room_list = function(req, res, next) {
    Room.find()
    .sort([['roomNumber', 'ascending']])
    .execute(function(err, list_room) {
        if (err) {return next(err)};
        res.render('room_list', { title: 'All Room', room_list: list_room});
    }); 
    //res.send('NOT IMPLEMENTED: room list');
};

// Display detail page for a specific room.
exports.room_read = function(req, res, next) {
    Room.find()
    .populate('room')
    .execute(function (err, results) {
        if (err) {return next(err)};
        if (results == null) {
            var err = new Error('Room not found');
            err.status = 404;
            return next(err)
        };
        console.log(results);
        res.render('room_read', {
            title: "Room Details",
            room: results})
        })       
   // res.send('NOT IMPLEMENTED: room detail: ' + req.params.id);
};


// Display room create form on GET.
exports.room_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: room create GET');
};

// Handle room create on POST.
exports.room_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: room create POST');
};

// Display room delete form on GET.
exports.room_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: room delete GET');
};

// Handle room delete on POST.
exports.room_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: room delete POST');
};

// Display room update form on GET.
exports.room_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: room update GET');
};

// Handle room update on POST.
exports.room_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: room update POST');
};