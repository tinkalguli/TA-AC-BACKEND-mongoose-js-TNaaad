const { Schema } = require("mongoose");

let articleSchema = new Schema({
    title : String,
    description : String
});