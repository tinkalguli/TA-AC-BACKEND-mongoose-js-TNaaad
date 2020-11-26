const { Schema } = require("mongoose");

let userSchema = new Schema({
    password : { type : String, minlength : 5, maxlength : 15 },
    createdAt : { type : Date, default : new Date() }
});

let User = mongoose.model("User", userSchema);

module.exports = User;