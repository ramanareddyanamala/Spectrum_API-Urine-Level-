var express = require('express');
var router = express.Router();
var Register=require('../models/Registration');

router.post('/',function(req,res,next){

        Register.addCustomer(req.body,function(err,count){

            if(err)
            {
                res.json(err);
				//res.json({ response: 'Not Ok' });
            }
            else{
            	    var obj = {response:'3'};
                    res.json(obj);
					
            }
        });
});

router.get('/', function(req, res, next) {
	  res.render('register');
	});
module.exports=router;

