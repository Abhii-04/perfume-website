const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the user profile page
router.route('/')
  .get((req, res) => {
    const filepath = path.join(__dirname, '../../frontend/templates/index.html');
    try {
      res.sendFile(filepath);
    } catch (err) {
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

router.route('/register')
    .get((req,res)=>{
        const filepath = path.join(__dirname, '../../frontend/templates/register.html');
        try{
            res.sendFile(filepath);
        } catch(err){
            res.status(500).send("error");
        }
    })
    .post((req,res)=>{
        res.send("registration post req");
    });



router.get('/product',(req,res)=>{
    const filepath = path.join(__dirname,'../../frontend/templates/product.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});

// profile route
router.route('/profile')
    .get((req,res)=>{
        const filepath = path.join(__dirname, '../../frontend/templates/profile.html');
        try{
            res.sendFile(filepath);
        }catch(err){
            res.status(500).send("error");
        }
    })
    .post((req,res)=>{
        res.sendfile("profile post data");
    })
    .put((req,res)=>{
        res.update("profile data updated")
    })



// admmin route
router.all('/admin',(req,res)=>{
    const filepath = path.join(__dirname,'../../frontend/templates/admin.html');
    try{
        res.sendFile(filepath);
    }catch(err){
        res.status(500).send("error");
    }
});


module.exports = router;
