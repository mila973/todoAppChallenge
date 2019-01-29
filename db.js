var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST || 'localhost',
    user     : 'root',
    password : process.env.MYSQL_PASSWORD || '',
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
