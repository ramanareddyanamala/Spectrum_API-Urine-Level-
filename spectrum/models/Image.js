var Express = require('express');
var multer = require('multer');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: Storage }).array("imgUploader", 3); //Field name and max count

module.exports=upload;



