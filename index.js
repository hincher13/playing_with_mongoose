import mongoose from 'mongoose';
import Blog from './model/Blog.js';

mongoose.connect(
    "mongodb+srv://rahinch:xNWZLO5Hx38leKoi@myfirstcluster.wqg2zea.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.log("Failed to connect to MongoDB:", error);
    });
    
// Create new blog post
// const article = await Blog.create({
//     title: 'Awesome Post!',
//     slug: 'awesome-post',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcment'],
// });

// //Insert the artucle in our MongoDB database
// await article.save();

//Find the single blog post
// const firstArticle = await Blog.findOne({});

const article = await Blog.findById("6407a914116e2ae9c5e5901d");
article.title = "I just changed the title!"
article.save();

console.log(article);