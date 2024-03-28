import express from "express";
// import {PORT, mongoDBURL} from  "./config.js";
import routes from './routes/routes.js'
import cors from 'cors';
import mongoose from 'mongoose';




// for production making evnironment variable and using it here
require('dotenv').config()




const app = express();

app.use(express.json());

app.use(cors({
  // origin: 'http://localhost:3000',
  origin: 'https://travelease-f-blue.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  })
);

app.use('/', routes)

mongoose
  // .connect(mongoDBURL)
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listeningg to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
