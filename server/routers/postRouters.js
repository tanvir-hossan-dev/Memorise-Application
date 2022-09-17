const express = require("express");
const { getPosts, createPosts, deletePost, updatePost } = require("../controlers/postControllers");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
