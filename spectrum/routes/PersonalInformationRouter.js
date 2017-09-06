var express = require('express');
var router = express.Router();
var FetchPersonal=require('../models/PersonalInformationFetch');
router.post('/',function(req,res,next){

	FetchPersonal.fetchPersonal(req.body,function(err,count){

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