var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wyb@19850923',
  database: 'pupu'
});

connection.connect();

let adminList = [];

connection.query('SELECT * from admin', (err, data, fields) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
  adminList = data;
});