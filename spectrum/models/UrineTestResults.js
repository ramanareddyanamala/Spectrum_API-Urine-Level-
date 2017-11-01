var db=require('../dbconnection');
var express = require('express');
var render = require('render');
var router = express.Router();
var TestUrine={
		
		
		    testResults:function(Test,callback){
			console.log(Test.Mail);
			
			
			return db.query("insert into urine(username,test_id,latitude,longitude,rbcValue ,billirubinValue,   urobiliogen , ketones ,protein ,nitrite,glucose,ph,sg,leokocit,relationName,relationType,testedTime) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[Test.Mail,Test.test_id,Test.lat,Test.long,
			                                                                                                                                                                                                                                            Test.rbcValue, 
			                                                                                                                                                                                                                                            Test.billirubinValue, 
			                                                                                                                                                                                                                                            Test.urobiliogen, 
			                                                                                                                                                                                                                                            Test. ketones, 
			                                                                                                                                                                                                                                            Test. protein , 
			                                                                                                                                                                                                                                            Test.nitrite,
			                                                                                                                                                                                                                                            Test.glucose,
			                                                                                                                                                                                                                                            Test.ph ,
			                                                                                                                                                                                                                                            Test.sg, 
			                                                                                                                                                                                                                                            Test.leokocit,
			                                                                                                                                                                                                                                            Test.relationName,
			                                                                                                                                                                                                                                            Test.relationType,
			                                                                                                                                                                                                                                            Test.testedTime
			                                                                                                                                                                                                                                            ],callback);
			
		    }
};
module.exports=TestUrine;