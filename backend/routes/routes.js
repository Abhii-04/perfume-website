const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the user profile page
router.get('/',(req,res)=>{
    const filepath = path.join(__dirname,'../../frontend/templates/index.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});

router.get('/contact',(req,res)=>{
    const filepath = path.join(__dirname,'../../frontend/templates/contact.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});

router.get('/about',(req,res)=>{
    const filepath=path.join(__dirname,'../../frontend/templates/about.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});

router.get('/login',(req,res)=>{
    const filepath = path.join(__dirname,'../../../frontend/templates/login.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});

router.get('/register',(req,res)=>{
    const filepath = path.join(__dirname, '../../frontend/templates/register.html');
    try{
        res.sendFile(filepath);
    } catch(err){
        res.status(500).send("error");
    }
});

router.get('/product',(req,res)=>{
    const filepath = path.join(__dirname,'../../frontend/templates/product.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});

router.all('/admin',(req,res)=>{
    filepath = path.join(__dirname,'../../frontend/templates/admin.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});


module.exports = router;
