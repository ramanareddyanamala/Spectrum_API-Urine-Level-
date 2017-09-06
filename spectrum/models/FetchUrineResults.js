var db=require('../dbconnection');
var express = require('express');
var render = require('render');
var router = express.Router();
var FetchUrine={
		    fetchResults:function(Fetch,res,callback){
		
			console.log(Fetch.Mail);
			var query = db.query("select * from urine where  username=? ",[Fetch.Mail],function(err, row, fields) {
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
			
		    },
		    
            deleteResults:function(Delete,res,callback){
          	console.log(Delete.Mail);
        	console.log(Delete.test_id);
        	var query =db.query("select * from urine where username=? and test_id=?",[Delete.Mail,Delete.test_id],function(err,row,fields){
        		var a = row.length;
        		console.log(a);
        		
        		if(err) {
				    console.log('Error occured!');
				    res(err);   
				    }
			   else if (a > 0) {
						 console.log('have a set of results');
						 db.query("delete from urine where username=? and test_id=?",[Delete.Mail,Delete.test_id],callback);
						 var obj = {response:'3',message:'Record deleted successfully!!!'};
						    res(obj);
						  
					   } 
			           else if (a === 0) {   
			        	   console.log('no data available with this test_id and username !!');
			        	   var obj1 ={response:'0',message:'no data available'};
			        	   res(obj1);
			           }
        		
        	});
    
    }
};
module.exports=FetchUrine;