const mongoose = require('mongoose');
const { uuidv7, uuidv4 } = require('uuidv7');
const PostSchema = new mongoose.Schema({
    __v: { type : String, default : uuidv4()},
    title : { type : String ,required : true },
    description:{type:String, required:true},
    imageUrl : {type : String ,required : true},
    likes : { type: [String] , default:[] },
    createdAt : {type: Date , default : Date.now }
});

module.exports = new mongoose.model("Post",PostSchema);