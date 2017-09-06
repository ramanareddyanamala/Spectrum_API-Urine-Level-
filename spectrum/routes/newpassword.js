var express = require('express');
var router = express.Router();
var New =require('../models/Newpassword');
router.post('/',function(req,res,next){

    New.setpassword(req.body,function(err,count){

        if(err)
        {
            res.json(err);
			
        }
        else{
            res.json(req.body);
        }
    });
});
module.exports=router;