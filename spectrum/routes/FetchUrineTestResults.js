var express = require('express');
var router = express.Router();
var FetchUrine=require('../models/FetchUrineResults');
router.post('/',function(req,res,next){

    FetchUrine.fetchResults(req.body,function(err,count){

        if(err)
        {
            res.json(err);
			
        }
        else{
            res.json(req.body);
        	
        }
    });
   
});

router.delete('/',function(req,res,next){
	
	 FetchUrine.deleteResults(req.body,function(err,count){
    	if(err){
    		res.json(err);
    	}
    	else{
    		res.josn(req.body);
    	}
    });
});

module.exports=router;