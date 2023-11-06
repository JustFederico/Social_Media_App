//npm init -y
//nodemon
//express bcrypt cors dotenv

import express from 'express';
import authRouter from './routes/auth.js';
import postsRouter from './routes/posts.js';
import userRouter from './routes/user.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();



app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 3002;

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL, {
       
})
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

})
    .catch((error) => console.log(`${error} unfortunately did not connect`));



//connect mongodb+srv://waspa:<password>@cluster0.ntogqsg.mongodb.net/