var express = require('express');
var router = express.Router();
var Login=require('../models/Login');
router.post('/',function(req,res,next){

    Login.loginAuthentication(req.body,function(err,count){

        if(err)
        {
            res.json(err);
			
        }
        else{
            res.json(req.body);
        }
    });
});
router.get('/', function(req, res, next) {
	  res.render('login');
	});
module.exports=router;