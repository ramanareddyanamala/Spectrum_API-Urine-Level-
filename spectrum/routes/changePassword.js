var express = require('express');
var router = express.Router();
var Change =require('../models/Changepassword');
router.post('/',function(req,res,next){

    Change.changePassword(req.body,function(err,count){

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