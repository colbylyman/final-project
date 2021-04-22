const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 50000000
  }
});

const users = require("./numbers.js");
const User = users.model;
const validUser = users.valid;



const numberScheme = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    number1: String,
    number2: String,
    operator: String,
  });
  
  const Number = mongoose.model('Number', numberScheme);


  // upload photo
router.post("/", validUser, async (req, res) => {
    // check parameters
  
    const number = new Number({
      number1: req.body.number1,
      number2: req.body.number2,
      operator: req.body.operator
    });
    try {
      await number.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });


  // get my photos
router.get("/", validUser, async (req, res) => {
    // return photos
    try {
      let numbers = await Number.find({
        user: req.user
      }).sort({
        created: -1
      }).populate('user');
      return res.send(numbers);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  // get all photos
router.get("/all", async (req, res) => {
  try {
    let numbers = await Number.find().sort({
      created: -1
    }).populate('user');
    return res.send(numbers);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


  module.exports = {
    model: Number,
    routes: router,
  }

  