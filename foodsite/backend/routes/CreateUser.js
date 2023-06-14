const express = require ('express')
const  router = express.Router()
const User = require('../model/User')
const{body , validationResult} = require('express-validator');

const jwt = require('jsonwebtoken')

const bcrypt = require("bcryptjs");
const { genSalt } = require('bcrypt');

const jwtSectret = "YouAreNowonVedanshSharmaWebsite."

router.post('/CreateUser', 
[body('email',"not a valid email.id").isEmail(),
body('password',"incorrect password").isLength({min:5})]
,async(req,res)=>{
    
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const salt = await genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password , salt)

    try {
       await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    } catch (error) {
        console.log('error in the user', error)
        res.json({success:false});
    }
})

router.post('/loginUser',
[body('email',"not a valid email.id").isEmail(),
body('password',"incorrect password").isLength({min:5})],
async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    let email = req.body.email
    try {
    let userData = await User.findOne({email})
        if(!userData){
            return res.status(400).json({errors: "Not a Valid User"});
        }
        
        const compare = await bcrypt.compare(req.body.password,userData.password)
        if(!compare){
            return res.status(400).json({errors: "Not a Valid User Password is Incorrect"});
        }

        const data  = {
            user:{
                id:userData.id
            }
        }
        const authToken = jwt.sign(data , jwtSectret)
        res.json({success:true , authToken:authToken });

    } catch (error) {
        console.log('error in the user', error)
        res.json({success:false});
    }
})

module.exports =  router;