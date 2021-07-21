const express = require("express");
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  data: []
});
const User = mongoose.model('User', userSchema);

/* GET home page. */
router.get("/", (req, res) => {
  User.find({}).then((fetchRes) => {
    console.log(fetchRes);
    return res.json({
      status: true,
      message: 'Fetched successfully!',
      data: fetchRes[0]['data']
    });
  }).catch((fetchErr) => {
    console.log(fetchErr);
    return res.json({
      status: true,
      message: 'Fetched successfully!',
      data: []
    });
  })
});

router.get("/fetch", (req, res) => {
  User.find({}).then((fetchRes) => {
    console.log(fetchRes);
    return res.json({
      status: true,
      message: 'Fetched successfully!',
      data: fetchRes[0]['data']
    });
  }).catch((fetchErr) => {
    console.log(fetchErr);
    return res.json({
      status: false,
      message: 'Unable to fetch data!',
    });
  })
});

router.post("/save", (req, res) => {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/comments',
  }).then((response) => {
    const user = new User(response);
    user.save().then((saveRes) => {
      console.log(saveRes);
      res.status(200);
      return res.json({
        status: true,
        message: 'Saved successfully!',
      });
    }).catch((error) => {
      console.log(error);
      res.status(200);
      return res.json({
        status: false,
        message: 'Save Failed!',
      });
    })
  }).catch((err) => {
    console.log(err);
    res.status(200);
    return res.json({
      status: false,
      message: 'Failed!',
    });
  });
});

module.exports = router;
