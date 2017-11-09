var express = require('express');
var router = express.Router();
var Relation=require('../models/Relationships');

router.post('/',function(req,res,next){

	Relation.addMember(req.body,function(err,count){

        if(err)
        {
        	var r = {response:'0',message:'please pass the required data!!'};
			res.json(err);
        }
        else{
        	var r1 = {response:'3',message:'Your Relationship information has added successfully'};
			res.json(r1);
        }
    });
});

 router.put('/',function(req,res,next){
	Relation.updateMember(req.body,function(err,count){
		if(err){
			console.log(err);
			res.json(err);
		}else{
			var r1 = {response:'3',message:'your relationship information has updated successfully.'};
			res.json(r1);
		}
	});
});


router.delete('/',function(req,res,next){
	Relation.deleteMember(req.body,function(err,count){
		
		if(err){
			console.log(err);
			res(err);
		}
		else{
			var r1 = {response:'3',message:'your relationship information has deleted successfully.'};
			res.json(r1);
		}
	
	});
});

module.exports=router;