import express from "express";

// for development, linking the env variable locally 
// import {PORT, mongoDBURL} from  "./config.js";

import routes from './routes/routes.js'
import cors from 'cors';
import mongoose from 'mongoose';

// require('dotenv').config() // only to be used in cjs

import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());

app.use(cors({
  // origin: 'http://localhost:3000',
  origin: ['https://travelease-f-blue.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  })
);

app.use('/', routes)



mongoose
  // .connect(mongoDBURL)               // should be only used when the URL string is being directly fetched and not through the .env file
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    console.log(process.env.PORT);
    app.listen(process.env.PORT, () => {
      console.log(`App is listeningg to port: ${process.env.PORT}`);
    });


    // app.listen(PORT, () => {
    //   console.log(`App is listening on port: ${PORT}`);
    // });
  })
  .catch((error) => {
    console.log(error);
  });


  export default app;