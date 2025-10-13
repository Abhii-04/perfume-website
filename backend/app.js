const express = require('express');
const path = require('path');
const app = express();


const router = express.Router(); //router-level middleware(importing router module)

app.use(express.static(path.join(__dirname, '../frontend')));

// route-level middleware
app.get('/', (req,res) => {
    const filepath = path.join(__dirname,'../frontend/templates/index.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("Error");
    }
});

app.get('/contact', (req,res) => {
    const filepath = path.join(__dirname,'../frontend/templates/contact.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("Error");
    }
});



app.listen(5000, () => {
    console.log('server is running on port 5000');
});