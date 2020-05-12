
const express = require("express")
const path = require("path")
const logger = require("morgan")
const mongoose = require("mongoose");

var app = express()

app.use(logger("dev"))


const PORT = process.env.PORT || 3500;
// set up default mongodb connection
var mongodb = process.env.MONGODB_URI ||"mongodb://julesg:Jule1995!@ds219191.mlab.com:19191/heroku_zdhfk7wn"
mongoose.connect(mongodb , { useNewUrlParser: true, useFindAndModify:false });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));





require("./Routes/apiRoutes.js")(app)
require("./Routes/htmlRoutes.js")(app)




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  