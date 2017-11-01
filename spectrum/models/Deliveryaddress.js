var db=require('../dbconnection');
var express = require('express');
var render = require('render');
var router = express.Router();
var Deliveryaddress={
		
		  
		    deliveryAddress:function(Address,callback){
			console.log(Address.Mail);
			
			return db.query("insert into deliveryaddress(username,address_id,name,phone,address,landmark) values(?,?,?,?,?,?)",[Address.Mail,Address.id,Address.name,Address.phone,Address.address,Address.landmark],callback);
			
		    },
		    updateAddress:function(Address,callback){
		    	console.log(Address.Mail);
		    	console.log(Address.id);
		    	return db.query("update deliveryaddress set name=?,phone=?,address=?,landmark=? where username=? and address_id=?",[Address.name,Address.phone,Address.address,Address.landmark,Address.Mail,Address.id],callback);
		    },
		    deleteAddress:function(Address,callback){
		    	console.log(Address.Mail);
		    	console.log(Address.id);
		    	return db.query("delete from deliveryaddress where username=? and spectrometer_id=?",[Address.Mail,Address.id],callback);
		    }
		    /*
		    ,
		    deleteAll:function(Device,callback){
		    	return db.query("delete from spectrometer where username=?",[Device.Mail],callback);
		    }*/
};
module.exports=Deliveryaddress;