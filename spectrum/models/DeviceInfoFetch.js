var db=require('../dbconnection');
var express = require('express');
var render = require('render');
var router = express.Router();
var DeviceInfo = {
		
		fetchDevice:function(Fetch,res,callback){
			console.log(Fetch.Mail);
			var query = db.query("select * from spectrometer where  username=? ",[Fetch.Mail],function(err, row, fields) {
				var a = row.length;
				console.log(a);
				if(err) {
					    console.log('Error occured!');
					    res(err);   
					    }
				else if (a > 0) {
							 console.log('have a set of results');
							 var obj = {response:'3',data:row};
							    res(obj);
							  
						   } 
				           else if (a === 0) {   
				        	   console.log('no data available!!');
				        	   var obj1 ={response:'0',message:'no data available'};
				        	   res(obj1);
				           }
			
			 });
			
		}
};
module.exports=DeviceInfo;