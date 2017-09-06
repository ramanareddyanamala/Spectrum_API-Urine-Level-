var express = require('express');
var router = express.Router();
var Verify=require('../models/Verification');
router.post('/',function(req,res,next){

    Verify.verifyCustomer(req.body,function(err,count){

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