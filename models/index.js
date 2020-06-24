// const Mongo = require('mongodb').MongoClient

var url = "mongodb://localhost/Workout"

const mongoose = require('mongoose');

// db.Workout.collection.insertMany(workoutSeed);

// let db = {}

// const Workout = new mongoose.Schema({
//   type: {type:String, trim:true, default:''},
//   name: {type:String, trim:true, default:''},
//   duration: {type:Number, default:0},
//   weight: {type:Number, default:0},
//   reps: {type:Number, default:0},
//   sets: {type:Number, default:0}
// });

const daySchema = new mongoose.Schema({
  duration: {type:Number, default:0}
});

const dayModel = mongoose.model("day", daySchema);

module.exports.Day = dayModel;

// Mongo.connect(url, function(err, db) {
//     if (err) throw err;
//     var database = db.db("Workout");
//     database.createCollection("collection", function(err, res) {
//       if (err) throw err;
//       console.log("collection created!");
//     });
//     module.exports = mongoose.model('db', db); 
//     // console.log("db: " + mongoose.model('db', db))
//   });



