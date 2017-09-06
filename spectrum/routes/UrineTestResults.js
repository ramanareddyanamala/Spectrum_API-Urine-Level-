var express = require('express');
var router = express.Router();
var TestUrine=require('../models/UrineTestResults');
router.get('/:mail?',function(req,res,next){

	if(req.params.mail){

		TestUrine.getTaskById(req.params.mail,function(err,rows){

	        if(err)
	        {
	            res.json(err);
	        }
	        else{
	        	var obj = {response:'3',data:rows};
			    //res(obj);
	            res.json(obj);
	        }
	    });
	}
	else{

		TestUrine.getAllTasks(function(err,rows){

	        if(err)
	        {
	            res.json(err);
	        }
	        else
	        {
	            res.json(rows);
	        }
	 
	    });
	}
	});

router.post('/',function(req,res,next){

    TestUrine.testResults(req.body,function(err,count){

        if(err)
        {
        	var r = {response:'0',message:'please pass the required data!!'};
			res.json(r);
        }
        else{
        	var r1 = {response:'3',data:[req.body]};
			res.json(r1);
        }
    });
});

module.exports=router;