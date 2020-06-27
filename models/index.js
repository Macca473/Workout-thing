// // const Mongo = require('mongodb').MongoClient

// const mongoose = require('mongoose');

// var url = "mongodb://localhost/workout"

// mongoose.connect(url, {useNewUrlParser: true});

// // db.Workout.collection.insertMany(workoutSeed);

// // let db = {}

// let date = new Date().setDate(new Date().getDate());

// console.log(date);


// const WorkoutSchema = new mongoose.Schema({
//   day: {type:Date, default: date},
//   exercises: [{
//     type: {type:String, trim:true,required: true},
//     name: {type:String, trim:true,required: true},
//     duration: {type:Number, required: true},
//     weight: {type:Number, default:0},
//     reps: {type:Number, default:0},
//     sets: {type:Number, default:0},
//     distance: {type:Number, default:0}
//   }]
// });

// const WorkoutModel = mongoose.model("workout", WorkoutSchema);

// module.exports.workout = WorkoutModel;


// // let date = new Date().getDate();

// // let datejn = date.toJSON();

// // let date = new Date().getDate().toJSON();

// // new Date().setDate(new Date().getDate()-5);

// // let date = new Date().getDate();

module.exports = {
  workout: require("./workout"),
};