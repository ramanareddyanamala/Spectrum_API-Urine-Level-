var express = require('express');
var router = express.Router();
var Spectrometer=require('../models/SpectrometerDevice');
/*
router.get('/:mail?',function(req,res,next){

	if(req.params.mail){

		Spectrometer.getTaskById(req.params.mail,function(err,rows){

	        if(err)
	        {
	            res.json(err);
	        }
	        else{
	        console.log(rows.spectrometer_id);
	        	var obj = {response:'3',data:rows};
			    res.json(obj);
	        }
	    });
	}
	else{

		Spectrometer.getAllTasks(function(err,rows){

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
router.post('/',function(req,res,next){

	Spectrometer.deviceInfo(req.body,function(err,count){

        if(err)
        {
        	var r = {response:'0',message:'please pass the required data!!'};
			res.json(err);
        }
        else{
        	var r1 = {response:'3',message:'Your device has added successfully'};
			res.json(r1);
        }
    });
});

router.put('/',function(req,res,next){
	Spectrometer.updateDevice(req.body,function(err,count){
		if(err){
			var r ={response:'0',message:'please pass the required data!!!'};
			res.json(r);
		}else{
			var r1 = {response:'3',message:'your device information has updated successfully.'};
			res.json(r1);
		}
	});
});


router.delete('/',function(req,res,next){
	Spectrometer.deleteDevice(req.body,function(err,count){
		if(err){
			var r ={response:'0',message:'please pass the required data!!!'};
			res.json(r);
		}
		else{
			var r1 = {response:'3',message:'your device has deleted successfully.'};
			res.json(r1);
		}
	});
});

module.exports=router;