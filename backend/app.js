const express = require('express');
const path = require('path');
const app = express();
const routes=require('./routes/routes');


const router = express.Router(); //router-level middleware(importing router module)

app.use(express.static(path.join(__dirname, '../frontend')));

app.use((req,res,next)=>{
    console.log('Time:',Date.now(),req.method ,req.url);
    next();
})
app.use('/',routes); //Loads all the routes from route.js file



app.listen(5000, () => {
    console.log('server is running on port 5000');
});