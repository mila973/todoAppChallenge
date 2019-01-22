var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test1'
});

connection.connect(function(error) {
    if(!!error){
        console.log('Error');
    }
    else{
        console.log('Connected');
    }

})

module.exports = connection;
