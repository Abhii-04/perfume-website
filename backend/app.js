import express from 'express';
import path from 'path';
const app = express();
import routes from './routes/routes.js';
import { dirname } from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import db from'./config/db.js';

import dotenv from 'dotenv'; //load .env file
dotenv.config(); //load .env file

const router = express.Router();//initialising routes

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// still deciding on how to implement this part of code
app.response.sendStatus = function(statusCode,type,message){
    return this.contentType(type)
    .status(statusCode)
    .send(message);
}
app.use('/',routes); //Loads all the routes from route.js file




let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running on ${port} `);
});