const Post = require("../models/post");

const getAllPosts = async () => {
  return await Post.find().sort({ createdAt: -1 });
};

const createPost = async (postData) => {
  console.log(postData);
  const post = new Post(postData);
  return await post.save();
};

const findPostById = async (id) => {
  return await Post.findById(id);
};

const toggleLike = async (post, userId) => {
  console.log(userId);
  const index = post.likes.indexOf(userId);
  console.log(index);
  const update = index === -1 ? { $push: { likes: userId } } : { $pull: { likes: userId } };
  

  console.log(update);
  const updatedPost = await Post.findByIdAndUpdate(post._id, update,{ new : true });
  return updatedPost;
};
module.exports = { getAllPosts, createPost, findPostById, toggleLike };
