const express = require("express");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();

const User = require("../models/Users");
const Keys = require("../config/keys");

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }).then(user => {
    if (!user) {
     return res.status(404).json({ email: "no user found" });
    } else {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            email:user.email,
            title:user.title
          };
          jwt.sign(
            payload,
            Keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          res.status(400).json({ msg: "password not matched" });
        }
      });
    }
  });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.status(400).json({ msg: "user already exist" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password,
        password2:req.body.password2
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.status(200).json(user);
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});
 
router.post('/forget-password',async (req,res) => {
  await User.findOne({email:req.body.email})
           .then(user => {
             if(!user) 
             {
               res.status(404).json({errors:'user not found'})
             } else {
               let id = user.id
                let receiver = user.email;
                let subject = 'change password';
                let description = "localhost:5555/change-password/"+ id 
                require('../config/email')(receiver,description,subject)
                res.status(200).json(user)                 
             } 
           })
})

router.put('/change-password/:id', (req,res) => {
let password = req.body.password;
let confirmPassword = req.body.confirmPassword
let errors = []

if(password !== confirmPassword) {
 errors.push({errors:'password dosent matach'})
}
if(errors.length >  0) {
 res.status(400).json(errors)
}else {
 bcrypt.genSalt(10, (err, salt) => {
   bcrypt.hash(password, salt, (err, hash) => {
     if (err) throw err;
     password = hash;
     User.findByIdAndUpdate(req.params.id,{
       $set: {
         password:password
       }
     }).then(() => {
       res.status(200).json({msg:"password changed succesfully"})
     })
   });
 });
}


})

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      Name: req.user.Name,
    });
  }
);

module.exports = router;
