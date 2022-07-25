const Post = require("../models/Post")

exports.getPosts = async (req,res)=>{
    try{
        const post = await Post.find({})

        res.status(200).json(post)

    }catch(error){
        res.status(404).json({Message : error.message})
    }
}


exports.createPosts = async (req,res)=>{
    const post = req.body
    const newPost = new Post(post)
    try{
        await newPost.save()
        res.status(200).json({Message: "Post Created Successful", newPost})
    }catch(error){
        res.status(404).json({Message : error.message})
    }
}


