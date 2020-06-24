const express = require('express');

// const session = require('express-session')

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = require("./models");

const app = express();
const path = require('path');

const PORT = process.env.PORT || 7000



app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');

const routes = require("./routes/routes");
// const api = require(__dirname + '/public/api.js')

app.use('/', routes);
// app.use('/api', api);


app.listen(PORT, function() {
  console.log("http://localhost:" + PORT);
});
