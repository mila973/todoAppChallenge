var express = require('express');
var sql = require('../db.js');
var router = express.Router();
const cors = require('cors');
var moment = require('moment')

const corsOptions = {
    origin: 'http://localhost:3000'
}


router.get('/get',  cors(corsOptions), function(req, resp){
    sql.query("SELECT * FROM todo WHERE `todo`.`archived`= 0;", function(error, rows, field){
        if(!!error)
        {
            console.log("Query failed! Failed to get not archived todos from database");
        }
        else{
            console.log('SUCCESSFULLY GOT NOT ARVHIVED TODOS FROM DATABASE');
            resp.json(rows);
        }
    })
});
router.get('/getArchive',  cors(corsOptions), function(req, resp){
    sql.query("SELECT * FROM todo WHERE `todo`.`archived`= 1;", function(error, rows, field){
        if(!!error)
        {
            console.log('Query failed! Failed to get archived todos from database');
        }
        else{
            console.log('SUCCESSFULLY GOT ARVHIVED TODOS FROM DATABASE');
            resp.json(rows);
        }
    })
});

router.get('/create',  cors(corsOptions), function(req, res){

    var value = {name: req.query.name,description: req.query.description,archived:  0,date:  moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')};
    sql.query("INSERT INTO `todo` SET ?;",value, function(error, result){
        if(!!error)
        {
            console.log('Query failed! Failed to insert new todo to database');
            res.send('Failed');
        }
        else{
            console.log('SUCCESSFULLY INSERTED NEW TODO TO DATABASE!');
            res.send('Success');
        }
    })
});
router.get('/delete',  cors(corsOptions), function(req, res){
    sql.query("DELETE FROM `todo` WHERE `todo`.`ID` =  ? ;",req.query.id, function(error, result){
        if(!!error)
        {
            console.log('Query failed! Failed to delete todo from database');
            res.send('Failed');
        }
        else{
            console.log('SUCCESSFULLY DELETED TODO FROM DATABASE!');
            res.send('Success');
        }
    })
});
router.get('/archive',  cors(corsOptions), function(req, res){
    var values=[moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'), req.query.id]
    sql.query("UPDATE todo SET archived = 1, date = ?  WHERE ID =  ? ;",values, function(error, result){
        if(!!error)
        {
            console.log('Query failed! Failed to mark todo as archived in database');
            res.send('Failed');
        }
        else{
            console.log('SUCCESSFULLY ARCHIVED TODO IN DATABASE!');
            res.send('Success');
        }
    })
});

module.exports = router;

