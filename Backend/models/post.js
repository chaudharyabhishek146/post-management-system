const mongoose = require('mongoose');
const { uuidv7 } = require('uuidv7');
const PostSchema = new mongoose.Schema({
    title : { type : String ,required : true },
    description:{type:String, required:true},
    imageUrl : {type : String ,required : true},
    likes : { type: [String] , default:[] },
    createdAt : {type: Date , default : Date.now }
});

module.exports = new mongoose.model("Post",PostSchema);