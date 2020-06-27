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
const { json } = require('express');

console.log("db: " + json(db.workout.workout));

router.get('/api/workouts', function(req, res) {  
    // const query = req.query
    // console.log(query)
    db.workout.workout.find()
    .then(database => {
        res.json(database)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
        })
    })
});

router.get(`/api/workouts/:id`, function(req, res) {
    const id = req.params.id

    db.workout.workout.findById(id)
    .then(database => {
        res.json(database)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
        })
    })
})

router.post(`/api/workouts/:id`, function(req, res) {
    const id = req.params.id

    db.workout.workout.findById(id)
    .then(database => {
        res.json(database)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
        })
    })
})

router.get(`/api/workouts/range`, function(req, res) {
    const id = req.params.id

    db.workout.workout.find()
    .then(database => {
        res.json(database)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
        })
    })
})

router.post(`/api/workouts`, function(req, res) {
    
    db.workout.workout.create(req.body)
        .then(database => {
        res.json(database)
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
        })
    })
})

module.exports = router;



// res.send('stats',  { user: req.user });

