var express = require('express');
var router = express.Router();
var FetchRelation=require('../models/GetRelationship');
router.post('/',function(req,res,next){

	FetchRelation.fetchRelation(req.body,function(err,count){

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