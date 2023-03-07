import mongoose from 'mongoose';
import Blog from './model/Blog';

mongoose.connect("mongodb+srv://rahinch:<password>@myfirstcluster.wqg2zea.mongodb.net/?retryWrites=true&w=majority");

// Create new blog post