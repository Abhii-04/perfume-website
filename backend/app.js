const express = require('express');
const path = require('path');
const app = express();
const routes=require('./routes/routes');


const router = express.Router(); //router-level middleware(importing router module)

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/', routes); //using the router module




app.listen(5000, () => {
    console.log('server is running on port 5000');
});