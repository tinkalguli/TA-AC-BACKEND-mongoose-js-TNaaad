const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const Article = require("./models/article");
const Comment = require("./models/comment");

mongoose.connect("mongodb://localhost:27017/sample",
{ useNewUrlParser : true, useUnifiedTopology : true },
(err) => {
    console.log(err ? err : "Connected");
});

const app = express();

app.listen(4000);