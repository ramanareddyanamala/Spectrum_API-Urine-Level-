var db=require('../dbconnection');
var fs = require('fs');
//var formidable = require('formidable');
var Student={
		/*
		getAllTasks:function(callback){

			return db.query("Select * from personalinfo",callback);

			},
			
			getTaskById:function(mail,callback){

			return db.query("select * from personalinfo where username=?",[mail],callback);
			},
			*/
		
			updateTask:function(Student,callback){
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
			    return  db.query("update personalinfo set name=?,gender=?,Height=?,Weight=?,DOB=?,Blood_Group=?,AddedTime=?,profilepic=? where username=?",[Student.Name,Student.Gender,Student.Height,Student.Weight,Student.DOB,Student.Blood_Group, Student.AddedTime,path1,Student.Mail],callback);
			},
			/*
    deleteStudent:function(Student,callback){
        var path='./public'+Student.student_img;
        fs.unlink(path,function(err){
            if(err){
            console.log(err);
            }
            console.log('Deleted successfuly');
            });
 return db.query("delete from student_tbl where rno=?",[Student.rno],callback);        
    },
    */
    addStudent:function(Student,res,req,callback){
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
    
    var q = db.query("Insert into personalinfo values(?,?,?,?,?,?,?,?,?,?)",[Student.Mail,Student.Email,Student.Name,Student.Gender,Student.Height,Student.Weight,Student.DOB,Student.Blood_Group, Student.AddedTime,path1],function(err,row,fields){
    	if(err){
    		console.log(err);
		     
		    res(err);   
    	}
    	else{
    		var obj = {response:'3',message:'your personal information has stored successfully.'};
    	    res(obj);
    	}
    });
    
  }
};

module.exports=Student;