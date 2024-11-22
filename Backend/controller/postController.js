const { uuidv7 } = require("uuidv7");
const postRepository = require("../repositories/postRepository");

const getPosts = async (req, res) => {
  try {
    // console.log(req);
    const posts = await postRepository.getAllPosts();
    console.log("getallPosts", posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  console.log(req.body);
  const { title, description, imageUrl, likes } = req.body;

  try {
    console.log(req.body);
    const post = await postRepository.createPost({
      title,
      description,
      imageUrl,
      likes
    });

    res.status(201).send("Created Successfully");
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
};

const likePost = async(req,res)=>{
    const { userId }= req.body;
    console.log(res.body,"req.param",res.params);
    try{
        const post = await postRepository.findPostById(req.params.id);
        console.log(post)
        if(!post)
           return res.status(404).send({"msg":"Post Not Found"});
        
        const updatePost = await postRepository.toggleLike(post,userId);
        res.status(200).json(updatePost.likes.length)
    }catch(err){
        res.status(501).send({"err":err.message});
    }
}

module.exports = { getPosts, createPost ,likePost};
