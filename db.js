var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST || 'localhost',
    user     : 'root',
    password : process.env.MYSQL_PASSWORD || '',
    database : 'test1'
});

connection.connect(function(error) {
    if(!!error){
        console.log('FAILED TO CONNECT TO DATABASE');
    }
    else{
        console.log('SUCCESSFULLY CONNECTED TO DATABASE');
    }

})

module.exports = connection;
