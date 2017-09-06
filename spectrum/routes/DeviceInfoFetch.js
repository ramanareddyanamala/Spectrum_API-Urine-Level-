var express = require('express');
var router = express.Router();
var DeviceInfo=require('../models/DeviceInfoFetch');

router.post('/',function(req,res,next){

	DeviceInfo.fetchDevice(req.body,function(err,count){

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
module.exports=router;