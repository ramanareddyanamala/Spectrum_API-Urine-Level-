var express = require('express');
var router = express.Router();
var Task=require('../models/Personalinfo');
/*
router.get('/:mail?',function(req,res,next){

	if(req.params.mail){

	    Task.getTaskById(req.params.mail,function(err,rows){

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

	 Task.getAllTasks(function(err,rows){

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
	*/

router.put('/:mail',function(req,res,next){

	
	
    Task.updateTask(req.params.mail,req.body,function(err,rows){

        if(err)
        {
        	var c = {response:'0',message:'please pass the data correctly!!'};
            res.json(c);
        }
        else
        {
        	var r = {response:'3',message:'you have successfully updated your personal information.'};
            res.json(r);
        }
    });
});
   router.post('/:mail',function(req,res,next){
	   
	   Task.getTaskById(req.body.mail,function(err,rows){

	        if(err)
	        {
	            res.json(err);
	        }
	        else{
	        	var obj = {response:'3',data:rows};
			    
	            res.json(obj);
	        }
	    });
   });
    router.post('/',function(req,res,next){
    	
        Task.addStudent(req.body,function(err,count){

            
            if(err)
            {
                res.json(err);
            }
            else{
            	    var obj1 = {response:'3',message:'your personal information has stored successfully.'};
			        res.json(obj1); 
                  
            }
        
        });
    	
});

module.exports=router;