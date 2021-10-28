const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/meanGamesDb";
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected", function(){
    console.log("Mongoose connected to " + dbURL);
});
mongoose.connection.on("disconnected", function(){
    console.log("Mongoose disconnected");
});
mongoose.connection.on("error", function(err){
    console.log("Mongoose connection error " + err);
});