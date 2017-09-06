var express = require('express');
var router = express.Router();
var upload=require('../models/Login');
var Task=require('../models/image');

router.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

router.post("/", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
});


module.exports=router;