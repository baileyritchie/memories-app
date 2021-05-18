import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors({
  origin: 'https://baileyritchie-memories-frontend.zeet.app'
}));

app.use('/posts',postRoutes);
app.use('/users',userRoutes);
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI,
    {
      dbName: process.env.MONGODB_NAME, 
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology:true})
  .then(() => app.listen(PORT,() => console.log(`Server running on ${PORT}.`)))
  .catch((error) => console.log('ERROR :',error.message));

mongoose.set('useFindAndModify',false);





