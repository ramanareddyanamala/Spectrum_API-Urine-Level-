var express = require('express');
var router = express.Router();
var Task=require('../models/Ramana');


router.post('/',function(req,res,next){
    	
        Task.addStudent1(req.body,function(err,count){

            
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