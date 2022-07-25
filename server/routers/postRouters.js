const express = require("express")
const {getPosts, createPosts} = require("../controlers/postControllers")

const router = express.Router()

router.get("/", getPosts)
router.get("/create", createPosts)

module.exports = router