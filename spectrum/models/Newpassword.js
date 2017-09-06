var db=require('../dbconnection');
var nodemailer = require('nodemailer');
var validator = require('validator');
var Newpassword={
		setpassword:function(New,res,err,callback){
			if(!validator.isEmail(New.Mail)){
				var query = db.query("select username,password from login where username=?",[New.Mail],function(err, row, fields) {
					var a = row.length;
					console.log(a);
					if(err) {
						    console.log('Error occured!');
						    res(err);   
						    }else if (a === 0) {
								 console.log('Please register with us!!');
								 var r2 ={response:'0',message:'something went wrong please check it'};
								 res(r2);
							  } 
					           else if (a > 0) {                                                   
					        	 var query = db.query("select password from login where username =? ",[New.Mail],callback);
					  			 query.on('error', function(err) {
					  			    throw err;
					  			});
					  		
					  			query.on('fields', function(fields) {
					  			    console.log(fields);
					  			});
					  			 
					  			    query.on('result', function(row) {
					  			    console.log(row.password);
					  		
						    console.log(row.password);
						    console.log(row.username);
						    console.log('Please enter a new password!!! ');
						    if(row.password === New.password){
						    	var r = {response:'4',message:'please enter other password beacause you have already set this password'};
						    	res(r);
						    	
						    }else{
                            db.query("update login set password = ? where username =?",[New.password,New.Mail],callback);
							var r1 ={response:'3',message:'we have updated with the new password..please login..'};
						    res(r1);
						    }
					  			    });
						  } 
					  	 });      
				
			}
			else if(validator.isEmail(New.Mail)){
				var query1 = db.query("select username from login where username=?",[New.Mail],function(err, row, fields) {
					var a = row.length;
					console.log(a);
					if(err) {
						 console.log('Error occured!');
						    var r = {response:'0'};
						    res(err);   
					}
					else if(a === 0){
						 console.log('Please register!');
						 var r2 ={response:'0',message:'something went wrong please check it!!'};
						 res(r2);
					}
					else if(a > 0){
						var query = db.query("select password from login where username =? ",[New.Mail],callback);
						 query.on('error', function(err) {
						    throw err;
						});
					
						query.on('fields', function(fields) {
						    console.log(fields);
						});
						 
						    query.on('result', function(row) {
						    console.log(row.password);
					
						    console.log(row.password);
						    console.log('Please enter a new password!!! ');
						    if(row.password === New.password){
						    	var r12 = {response:'4',message:'please enter other password beacause you have already set this password'};
						    	res(r12);
						    	
						    }else{
                            db.query("update login set password = ? where username =?",[New.password,New.Mail],callback);
							var r1 ={response:'3',message:'new password has set successfully..please login..'};
						    res(r1);
						    }
						    });
						
				}
					
			});
			}
			}
	
		
};
module.exports=Newpassword;
		