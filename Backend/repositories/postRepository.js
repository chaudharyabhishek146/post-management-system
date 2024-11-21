const Post = require("../models/post");

const getAllPosts = async () => {
  return await Post.find().sort({ createdAt: -1 });
};

const createPost = async(postData)=>{
    console.log(postData);
    const post = new Post(postData);
    return await post.save();
}
module.exports = {getAllPosts,createPost};