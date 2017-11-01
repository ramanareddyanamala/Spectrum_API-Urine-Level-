var db = require('../dbconnection');
var validator = require('validator');
var Verify={
		verifyCustomer:function(Verify,res,callback){
			if(!validator.isEmail(Verify.Mail)){
			var query = db.query("select pin,registerd_time from registration where username =? ",[Verify.Mail]);
			query.on('error', function(err) {
			    throw err;
			});
			 
			query.on('fields', function(fields) {
			    //console.log(fields);
			});
			 
			query.on('result', function(row) {
			    console.log(row.pin);
			    
			    var rt = row.registerd_time;
			    console.log(rt);
			    var at = Verify.attempt_time;
			    console.log(at);
			    var rest = at-rt;
			    console.log(rest);
			    
			   if(rest<=118330.5 && rest>1){
				   
			      if(row.pin === Verify.pin){
			    	   console.log('pin verified');
			    	   var query = db.query("select username from login where  username=?",[Verify.Mail],function(err, row, fields) {
							var a = row.length;
							console.log(a);
							if(err) {
								    console.log('Error occured!');
								    res(err);   
								    }else if (a > 0) {
								    	 db.query("update registration set attempt_time=? where username =?",[at,Verify.Mail],callback); 
										 var r = {response:'3',message:'OTP verified successfully!!!'};
										 res(r);
									  } 
							           else if (a === 0) {   
							        	   db.query("insert into login (username,password) values(?,?)",[Verify.Mail,Verify.password]);
										   db.query("update registration set pinverify = 1, attempt_time=? where username =?",[at,Verify.Mail],callback); 
										   var r1={response:'3',message:'OTP verified successfully!!!'};
										   res(r1);
							           }
			    	  });
				
			   }
			     
			   else{
				   console.log('incorrect pin!!');
				   var r1={response:'0',message:'Wrong OTP!!'};
				   res(r1);
				  }
			   }
			   else{
				   console.log('Your OTP got expired!!!');
				   var r12 ={response:'2',message:'Your OTP got expired!!'};
				   res(r12);
			   }
			});
			}
			else{
				var query1 = db.query("select pin,registerd_time from registration where username =? ",[Verify.Mail]);
				query1.on('error', function(err) {
				    throw err;
				});
				 
				query1.on('fields', function(fields) {
				    console.log(fields);
				});
				 
				query1.on('result', function(row) {
				    console.log(row.pin);
				    var rt = row.registerd_time;
				    console.log(rt);
				    var at = Verify.attempt_time;
				    console.log(at);
				    var rest = at-rt;
				    console.log(rest);
				    
				   if(rest<=118330.5 && rest>=0){
					   
				   if(row.pin === Verify.pin){
					   console.log('pin verified');
					   
					   var query = db.query("select username from login where  username=?",[Verify.Mail],function(err, row, fields) {
							var a = row.length;
							console.log(a);
							if(err) {
								    console.log('Error occured!');
								    res(err);   
								    }else if (a > 0) {
								    	// db.query("update login set password=? where username =?",[Verify.password,Verify.Mail],callback); 
								    	 db.query("update registration set attempt_time=? where username =?",[at,Verify.Mail],callback); 
										 var r = {response:'3',message:'OTP verified successfully!!!'};
										 res(r);
									  } 
							           else if (a === 0) {   
							        	   db.query("insert into login (username,password) values(?,?)",[Verify.Mail,Verify.password]);
										   db.query("update registration set pinverify = 1, attempt_time=? where username =?",[at,Verify.Mail],callback); 
										   var r1={response:'3',message:'OTP verified successfully!!!'};
										   res(r1);
							           }
					   		});

				    }
				   else{
					   console.log('incorrect pin!!');
					   var r1={response:'0',message:'Wrong OTP!!!'};
					   res(r1);
					  }
				   }
				   else{
					console.log('OTP got expired!!!');
					var r12={response:'2',message:'Your OTP got expired!!!'};
					res(r12);
				     }
				   
				});
			}
		}
};
module.exports=Verify;
