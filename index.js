import express from "express";
// import {PORT, mongoDBURL} from  "./config.js";
import routes from './routes/routes.js'
import cors from 'cors';
import mongoose from 'mongoose';

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
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listeningg to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
