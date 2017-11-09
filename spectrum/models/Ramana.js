var db=require('../dbconnection');
var fs = require('fs');
//var formidable = require('formidable');
var Student1={
		
			
    addStudent1:function(Student1,res,req,callback){
    var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    var base64d=Student1.personInfo_img.replace(/^data:image\/png;base64,/, "");
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
    
    var q = db.query("Insert into gallery values(?,?)",[Student1.Name,path1],function(err,row,fields){
    	if(err){
    		console.log(err);
		     
		    res(err);   
    	}
    	else{
  
        var obj = {response:'3',url:path1};
    	    res(obj);
		}
 
    		
    
    });
    
  }
};

module.exports=Student1;