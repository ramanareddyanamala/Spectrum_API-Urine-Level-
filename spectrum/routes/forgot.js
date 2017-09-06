var express = require('express');
var router = express.Router();
var Forgot=require('../models/Forgotpassword');
router.post('/',function(req,res,next){

    Forgot.forgot(req.body,function(err,count){

        if(err)
        {
            res.json(err);
			
        }
        else{
        	var obj = {response:'3'};
            res.json(req.body);
        }
    });
});
module.exports=router;