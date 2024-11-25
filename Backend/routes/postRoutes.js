const express = require("express");
const postController = require("../controller/postController");

const router = express.Router();

router.get("/posts", postController.getPosts);

router.post("/posts",postController.createPost);

router.put("/posts/:id/like",postController.likePost);

module.exports = router;
