var express = require('express');
var router = express.Router();
var Feedback=require('../models/Feedback');

router.post('/',function(req,res,next){
    	
        Feedback.feedBack(req.body,function(err,count){

            
            if(err)
            {
                res.json(err);
            }
            else{
            	    var obj1 = {response:'3',message:'your information has stored successfully.'};
			        res.json(obj1); 
                  
            }
        
        });
    	
});
module.exports=router;