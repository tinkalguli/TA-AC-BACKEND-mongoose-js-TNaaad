const { Schema } = require("mongoose");

let userSchema = new Schema({
    name : String,
    email : { type : String, lowercase : true, default : 0 },
    age : Number,
    password : { type : String, minlength : 5 },
    createdAt : { type : Date, default : Date.now() },
    favourites : [String]
}, { timestamps : ture });

module.exports = mongoose.model("User", userSchema);