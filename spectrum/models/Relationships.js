var db=require('../dbconnection');
var fs = require('fs');
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('dmY');
var Member={
		
			    updateMember:function(Student,res,callback){
				var dt=new Date();//current date and time of server
			    var text = "";//random text
			    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			    for( var i=0; i < 5; i++ ){
			        text += possible.charAt(Math.floor(Math.random() * possible.length));
			    }
			    var base64d=Student.personInfo_img.replace(/^data:image\/png;base64,/, "");
			    var path="./public/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
			    var path1="/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
			    fs.writeFile(path,base64d,'base64',function(err){
			  if(err) {
				    var obj = {response:'0'};
				    //res(obj);
			        return console.log(err);
			        
			    }
			   console.log("The file was saved!");
			   });
				var k = db.query("update relationships set isactive=? where username=?",[0,Student.Mail]);

			   console.log('get data...'+Student.member_id);
			   console.log('mail dta..'+Student.Mail);
			  if(Student.member_id !== 'undefined'){
				var d =  db.query("update relationships set name =?, mail=?,Height=?,Weight=?,DOB=?,relationship=?,Gender=?,Blood_Group=?,AddedTime=?,image=?,isactive=? where username=? and member_id=?",[Student.Name,Student.Email,Student.Height,Student.Weight,Student.DOB,Student.Relationship,Student.Gender,Student.Blood_Group, Student.AddedTime,path1,1,Student.Mail,Student.member_id],function(err,row){
				if(err){
				res(err);
				}else{
				 var r1 = {response:'3',message:'your data has successfully updated'};
			     res(r1);
				}
				});
			   
			  }else{
			  var r1 = {response:'0',message:'your pass required data'};
			     res(r1);
			  }
			},
			
    deleteMember:function(Student,callback){
			console.log('entered into a method');
			var m ="";
			console.log(Student.member_id);
			console.log(Student.Mail);
		    var qc = db.query("select image from relationships where username =? and member_id=? ",[Student.Mail,Student.member_id]);
			qc.on('error', function(err) {
			    throw err;
				console.log(err);
			});
			 
			qc.on('result', function(row) {
			console.log(row.image);
		var path='./public'+row.image;
        fs.unlink(path,function(err){
            if(err){
            console.log(err);
            }
            else{
				console.log('Deleted successfuly');
				m = Student.member_id;
			 
			}
			});
			});
			console.log('m value..'+m);
		 return db.query("delete from relationships where username=? and member_id=?",[Student.Mail,Student.member_id ],callback);
		   
    },
    
    addMember:function(Student,res,req,callback){
    var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    var base64d=Student.personInfo_img.replace(/^data:image\/png;base64,/, "");
    var path="./public/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    fs.writeFile(path,base64d,'base64',function(err){
   if(err) {
	   // var obj = {response:'0'};
	    res(err);
        return console.log(err);
        
    }
   console.log("The file was saved!");
 });
    var query = db.query("select count(member_id)+1 as member_id from relationships");
			
			query.on('error', function(err) {
			    throw err;
			});
		
			query.on('fields', function(fields) {
			    console.log(fields);
			});
			 
			    query.on('result', function(row) {
			    console.log(row);
			     var r = row.member_id;
			     console.log(r);
			     var s = formatted;
					s=s+r;
				   var data ="Mem_";
					data +=s;
					console.log(data);
 
		 var c = db.query("update relationships set isactive = 0 where username=?",[Student.Mail]);
		
		 

         var q = db.query("Insert into relationships values(?,?,?,?,?,?,?,?,?,?,?,?,?)",[Student.Mail,data,Student.Name,Student.Email,Student.DOB,Student.Relationship,Student.Gender,Student.Height,Student.Weight,Student.Blood_Group, Student.AddedTime,path1,1],function(err,row,fields){
    	if(err){
    		console.log(err);
		     
		    res(err);   
    	}
    	else{
    		var obj = {response:'3',member_id:data,message:'your relationship details has stored successfully.'};
    	    res(obj);
    	}
		 
    });
    });
  }
};

module.exports=Member;