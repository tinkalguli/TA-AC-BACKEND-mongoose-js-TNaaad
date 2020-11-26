const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test",
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if (err) console.log(err);
    console.log("Connected to the database");
});

const app = express();

app.listen(4000);