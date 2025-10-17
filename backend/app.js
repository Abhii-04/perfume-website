const express = require('express');
const path = require('path');
const app = express();
const routes=require('./routes/routes');
const adminroute = require('./admin/adminroute.js');

require('dotenv').config(); //load .env file
const router = express.Router();//initialising routes
// const db = db(); //router-level middleware(importing router module)

app.use(express.static(path.join(__dirname, '../frontend')));



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