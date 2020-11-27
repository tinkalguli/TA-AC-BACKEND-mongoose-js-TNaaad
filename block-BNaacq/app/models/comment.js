const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    content : String,
    author : Schema.Types.ObjectId,
    article : Schema.Types.ObjectId
}, { timestamps : true });

module.exports = mongoose.model("Comment", commentSchema);