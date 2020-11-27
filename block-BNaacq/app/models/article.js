const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title : String,
    description : String,
    tags : [String],
    likes : [String],
    author : Schema.Types.ObjectId,
    comments : [Schema.Types.ObjectId]
}, { timestamps : true });

module.exports = mongoose.model("Article", articleSchema);