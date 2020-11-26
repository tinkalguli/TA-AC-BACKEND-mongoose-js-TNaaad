const { Schema } = require("mongoose");

let articleSchema = new Schema({
    name : String,
    email : { type : String, lowercase : true },
    age : { type : Number, default : 0 }
});