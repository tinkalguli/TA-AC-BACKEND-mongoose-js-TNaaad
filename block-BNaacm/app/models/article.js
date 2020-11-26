const { Schema } = require("mongoose");

let articleSchema = new Schema({
    title : { type : String, minlength : 5, maxlength : 15 },
    description : { type : String, default : "No description" }
});

module.exports = mongoose.model("Article", articleSchema);