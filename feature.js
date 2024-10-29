var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Library"
});

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  con.query("SELECT * FROM books", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, function () {
  console.log('Server is listening at port 5000...');
});

function readCard(){
    
}