import express from 'express';
import db from '../config/db.js';
const router = express.Router();
import path from 'path';
import { dirname } from 'path';
import {fileURLToPath} from 'url';
import Contact from '../models/contact.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import dotenv from 'dotenv';
dotenv.config(); // load .env file

router.use((req, res, next) => {
    console.log('Time:', Date.now(), req.method, req.url);
    next();
});

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

router.route('/register')
    .get((req, res) => {
        const filepath = path.join(__dirname, '../../frontend/templates/register.html');
        try {
            res.sendFile(filepath);
        } catch (err) {
            res.status(500).send("error");
        }
    })
    .post((req, res) => {
        res.send("registration post req");
    });
router.get('/login', (req, res) => {
    const filepath = path.join(__dirname, '../../frontend/templates/login.html');
    try {
        res.sendFile(filepath);
    } catch (err) {
        res.status(500).send("error");
    }
});

router.route('/contact')
    .get((req, res) => {
        const filepath = path.join(__dirname, '../../frontend/templates/contact.html');
        try {
            res.sendFile(filepath);
        } catch (err) {
            res.status(500).send("error");
        }
    })
    .post(async(req,res)=>{
        try{
            const newcontact=new Contact(req.body);
            await newcontact.save();
            console.log('contact payload', req.body);
            res.status(201).json({message:'Message sent succesfully'});
        }catch(err){
            res.status(500).json({error:'Failed to send message'});
        }

    });

router.get('/about', (req, res) => {
    const filepath = path.join(__dirname, '../../frontend/templates/about.html');
    try {
        res.sendFile(filepath);
    } catch (err) {
        res.status(500).send("error");
    }
});



router.route('/Product')
    .get((req, res) => {
        const filepath = path.join(__dirname, '../../frontend/templates/product.html');
        try {
            res.sendFile(filepath);
        } catch (err) {
            res.status(500).send("error");
        }
    });

// profile route
router.route('/profile')
    .get((req, res) => {
        const filepath = path.join(__dirname, '../../frontend/templates/profile.html');
        try {
            res.sendFile(filepath);
        } catch (err) {
            res.status(500).send("error");
        }
    })
    .post((req, res) => {
        res.send("profile post data");
    })
    .put((req, res) => {
        res.send("profile data updated");
    });

// admin route
router.all('/admin', (req, res) => {
    const filepath = path.join(__dirname, '../../frontend/templates/admin.html');
    try {
        res.sendFile(filepath);
    } catch (err) {
        res.status(500).send("error");
    }
});

export default router;