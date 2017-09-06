var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'vedas',
database:'nodejs'

});
module.exports=connection;