const express = require('express')
var path = require('path');

let router = express.Router()

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
//   })



const dir = path.resolve("./public");

// console.log(dir);

var API = require(dir + '/api.js');

// router.use(function log (req, res, next) {
//     console.log(API)
//     next()
// })

router.get('/', function(req, res) {  
    res.sendFile(path.join(dir + '/index.html'));
});

router.get('/', function(req, res) {  
    res.sendFile(path.join(dir + '/index.html'));
});

router.get('/exercise', function(req, res) {  
    res.sendFile(path.join(dir + '/exercise.html'));
});

router.get('/stats', function(req, res) {  
    res.sendFile(path.join(dir + '/stats.html'));
});

// router.get('/api', function(req, res) {  
//     res.sendFile(path.join(dir + '/api.js'));
//     console.log(path.join(dir + '/api.js'))
// });


// db.Workout.collection.insertMany(workoutSeed);

const db = require('../models/index');

router.get('/api/workouts', function(req, res) {  

    console.log("hello");

    db.Day.find()
    .then(database => {
        res.json({
        confirmation: 'success',
        data: database
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            // message: err.message
        })
    })

    // res.json({
    //     confirmation: 'success',
    //     data: 'this is the profile endpoint!' + db
    // })
});

// router.get('/api/workouts/:id')

module.exports = router;



// res.send('stats',  { user: req.user });

