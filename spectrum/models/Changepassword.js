var db=require('../dbconnection');
var validator = require('validator');
var Change={
		changePassword:function(Change,res,callback){
			if(!validator.isEmail(Change.Mail))
			{
				var query = db.query("select username from login where username =? ",[Change.Mail],function(err,row,fields){
					var a = row.length;
					console.log(a);
					if(err) {
						    console.log('Error occured!');
						    res(err);   
						    }else if (a > 0) {
						    	
			  var query = db.query("select password from login where username =? ",[Change.Mail],callback);
			 query.on('error', function(err) {
			    throw err;
			});
		
			query.on('fields', function(fields) {
			    console.log(fields);
			});
			 
			    query.on('result', function(row) {
			    console.log(row.password);
			    
			   if(row.password === Change.Currentpassword){
				   console.log('You can change your password!!');
				   if(row.password === Change.Newpassword){
					   var r12 = console.log({response:'4',message:'please enter other password beacause you have already set this password'});  
				   }else{
				   db.query("update login set password=? where username=?",[Change.Newpassword,Change.Mail]);
				   var r = {response:'3',message:'You have changed your password successfully...'};
				   res(r);
				  }
			   }
			   else{
				   console.log('Invalid current password!!');
				   var r1 = {response:'0',message:'current password is wrong!!'};
				   res(r1);
				  }
			});
		  }else{
				console.log('no data found!!');
				var obj ={response:'2',message:'you donot have access to change your password, please register!!'};
				res(obj);
			}
			});
		
			}else if (validator.isEmail(Change.Mail)){
				var query1 = db.query("select username,password from login where username =?",[Change.Mail],callback);
				query1.on('error', function(err) {
				    throw err;
				});
				 
				query1.on('fields', function(fields) {
				    console.log(fields);
				});
				 
				query1.on('result', function(row) {
				    console.log(row.password);
				    console.log(Change.Currentpassword);
				   if(row.password === Change.Currentpassword ){
					   console.log('You can change your password!!');
					   if(row.password === Change.Newpassword){
						  var r2 = {response:'4',message:'please enter other password beacause you have already set this password'};
					   }else{
					   db.query("update login set password=? where username=?",[Change.Newpassword,Change.Mail]);
					   var r = {response:'3',message:'you have changed your password successfully...'};
					   res(r);
					   }
				   }
				   else{
					   console.log('Invalid current password!!');
					   var r1 = {response:'0',message:'Current password is wrong!!'};
					   res(r1);
					  }
				});
			}
		}
	};
module.exports=Change;
		