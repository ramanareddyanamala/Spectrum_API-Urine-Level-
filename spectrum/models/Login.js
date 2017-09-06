var db=require('../dbconnection');
var express = require('express');
var render = require('render');
var validator = require('validator');
var router = express.Router();
var Login={
		loginAuthentication:function(Login,res,callback){
			console.log(Login.Mail);
			console.log(Login.password);
			if(!validator.isEmail(Login.Mail))
			{
			    var query = db.query("select username,password from login where username =? ",[Login.Mail],function(err,row,fields){
				var a = row.length;
				console.log(a);
				if(err) {
					    console.log('Error occured!');
					    res(err);   
					    }else if (a > 0) {
					    	var query = db.query("select username,password from login where username =? ",[Login.Mail],callback);
					    	query.on('error', function(err) {
							    throw err;
							});
						
							query.on('fields', function(fields) {
							    console.log(fields);
							});
							 
							    query.on('result', function(row) {
							    console.log(row.password);
							    
							   if(row.password === Login.password && (row.username === Login.Mail)){
								   console.log('Login success');
								  
								    var obj = {response:'3',data:[Login.Mail,Login.password]};
								    res(obj);
								  
							   }
							   else{
								   console.log('Login failed!!');
								   var r1 = {response:'0',message:'invalid credentials!!!'};
								   res(r1);
								}
								
							});
							 
						  } 
				           else if (a === 0) {   
				        	   console.log('no data found!!');
				        	   var rc = {response:'2',message:'you dont have account please register'};
				        	   res(rc);
				           }
			});
			
			}else{
				var query1 = db.query("select username,password from login where username =?",[Login.Mail],function(err,row,fields){
					var a = row.length;
					console.log(a);
					if(err) {
					    console.log('Error occured!');
					    res(err);   
					    }else if (a > 0) {
					    	var query = db.query("select username,password from login where username =? ",[Login.Mail],callback);
					    	
					    	query.on('error', function(err) {
							    throw err;
							});
							 
							query.on('fields', function(fields) {
							    console.log(fields);
							});
							 
							query.on('result', function(row) {
							    console.log(row.password);
							    
							   if(row.password === Login.password && (row.username === Login.Mail)){
								   console.log('Login success!!');
								   var obj = {response:'3',data:[row]};
								   res(obj);
							   }
							   else{
								   console.log('Login failed!!');
								   var r1 = {response:'0',message:'Invalid credentials!!!'};
								   res(r1);
								  }
							});
					    	
					    }
					    else {   
				        	   console.log('no data found!!');
				        	   var rc = {response:'2',message:'No data found!!! Please register with us.'};
				        	   res(rc);
				           }
					
				});
				
			}
		}
};
module.exports=Login;