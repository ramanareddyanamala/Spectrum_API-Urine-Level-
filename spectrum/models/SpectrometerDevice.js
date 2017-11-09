var db=require('../dbconnection');
var express = require('express');
var render = require('render');
var router = express.Router();
var Spectrometer={
		
		  
		    deviceInfo:function(Device,res,req,callback){
			console.log(Device);
			
			var q= db.query("insert into spectrometer(username,battery_percentage,spectrometer_id,spectrometer_name,last_sync,spectrometer_version) values(?,?,?,?,?,?)",[Device.Mail,Device.Battery_percentage,Device.id,Device.spectrometer_name,Device.last_sync,Device.spectrometer_version ],function(err,result){
			if(err){
			console.log(err);
			res(err);
			}else{
			var r1 = {response:'3',message:'Your device has added successfully'};
			res(r1);
			}
			});
			
		    },
		    updateDevice:function(Device,callback){
		    	console.log(Device.Mail);
		    	console.log(Device.id);
		    	return db.query("update spectrometer set battery_percentage=?,spectrometer_name=?,last_sync=?,spectrometer_version=? where username=? and spectrometer_id=?",[Device.Battery_percentage,Device.spectrometer_name,Device.last_sync,Device.spectrometer_version,Device.Mail,Device.id],callback);
		    },
		    deleteDevice:function(Device,callback){
		    	console.log(Device.Mail);
		    	console.log(Device.id);
		    	return db.query("delete from spectrometer where username=? and spectrometer_id=?",[Device.Mail,Device.id],callback);
		    }
		    /*
		    ,
		    deleteAll:function(Device,callback){
		    	return db.query("delete from spectrometer where username=?",[Device.Mail],callback);
		    }*/
};
module.exports=Spectrometer;