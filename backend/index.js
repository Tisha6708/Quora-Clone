const express = require("express");
const {v4:uuidv4} = require("uuid");
const mongoose = require('mongoose');
const Post = require('./models/post');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

main().then(()=>{
    console.log("Connected to MongoDB")
}).catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Quora');
};

app.get("/api/posts",async (req,res)=>{
    const posts = await Post.find();
    res.json(posts);
});

app.post("/api/posts",async (req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    const post = new Post({username, content});
    await post.save();
    res.status(201).json(post);
});

app.get("/api/posts/:id",async (req,res)=>{
    let { id } = req.params;
    const post = await Post.findById(req.params.id);
    res.json(post);
});

app.patch("/api/posts/:id",async (req,res)=>{
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        {content : req.body.content},
        {new : true}
    );
    res.json(post);
});

app.delete("/api/posts/:id",async (req,res)=>{
    await Post.findByIdAndDelete(req.params.id);
    res.json({message:"Post deleted"});
});

app.listen(port,()=>{
    console.log("Listening on port : 3000");
});