import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [string],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
        user: String,
        content: String,
        votes: Number
    }]
});

const Blog = model('Blog', blogSchema);

export default Blog;