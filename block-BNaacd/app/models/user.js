const { Schema } = require("mongoose");

let userSchema = new Schema({
    name : String,
    email : { type : String, lowercase : true },
    age : { type : Number, default : 0 }
});