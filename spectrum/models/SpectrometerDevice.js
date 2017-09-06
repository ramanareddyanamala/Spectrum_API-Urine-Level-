var db=require('../dbconnection');
var express = require('express');
var render = require('render');
var router = express.Router();
var Spectrometer={
		
		  
		    deviceInfo:function(Device,callback){
			console.log(Device.Mail);
			
			return db.query("insert into spectrometer(username,spectrometer_information,spectrometer_id,spectrometer_name,last_sync,spectrometer_version) values(?,?,?,?,?,?)",[Device.Mail,Device.spectrometer_information,Device.id,Device.spectrometer_name,Device.last_sync,Device.spectrometer_version ],callback);
			
		    },
		    updateDevice:function(Device,callback){
		    	console.log(Device.Mail);
		    	console.log(Device.id);
		    	return db.query("update spectrometer set spectrometer_information=?,spectrometer_name=?,last_sync=?,spectrometer_version=? where username=? and spectrometer_id=?",[Device.spectrometer_information,Device.spectrometer_name,Device.last_sync,Device.spectrometer_version,Device.Mail,Device.id],callback);
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