import mongoose from 'mongoose';
import Blog from './model/Blog.js';

// mongoose.connect(
//     "mongodb+srv://rahinch:<password>@myfirstcluster.wqg2zea.mongodb.net/?retryWrites=true&w=majority");

// // Create new blog post
// const article = new Blog({
//     title: 'Awesome Post!',
//     slug: 'awesome-post',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcment'],
// });

// //Insert the artucle in our MongoDB database
// await article.save();

// //Find the single blog post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

mongoose.connect(
    "mongodb+srv://rahinch:xNWZLO5Hx38leKoi@myfirstcluster.wqg2zea.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        // Create new blog post
        const article = new Blog({
            title: 'Awesome Post!',
            slug: 'awesome-post',
            published: true,
            content: 'This is the best post ever',
            tags: ['featured', 'announcment'],
        });

        //Insert the article in our MongoDB database
        article.save();

        //Find the single blog post
        const firstArticle = Blog.findOne({});
        console.log(firstArticle);
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });




