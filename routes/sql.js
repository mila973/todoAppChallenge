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
            console.log('query failed!')
        }
        else{
            console.log('NICE!!');
            resp.json(rows);
        }
    })
});
router.get('/getArchive',  cors(corsOptions), function(req, resp){
    sql.query("SELECT * FROM todo WHERE `todo`.`archived`= 1;", function(error, rows, field){
        if(!!error)
        {
            console.log('query failed!')
        }
        else{
            resp.json(rows);
        }
    })
});

router.get('/create',  cors(corsOptions), function(req, res){

    var value = {name: req.query.name,description: req.query.description,archived:  0,date:  moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')};
    sql.query("INSERT INTO `todo` SET ?;",value, function(error, result){
        if(!!error)
        {
            console.log('query failed!')
        }
        else{
            console.log('INSERTED!!');
        }
    })
});
router.get('/delete',  cors(corsOptions), function(req, res){
    sql.query("DELETE FROM `todo` WHERE `todo`.`ID` =  ? ;",req.query.id, function(error, result){
        if(!!error)
        {
            console.log('query failed!')
        }
        else{
            console.log('Deleted!!');
        }
    })
});
router.get('/archive',  cors(corsOptions), function(req, res){
    var values=[moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'), req.query.id]
    sql.query("UPDATE todo SET archived = 1, date = ?  WHERE ID =  ? ;",values, function(error, result){
        if(!!error)
        {
            console.log('query failed!')
        }
        else{
            console.log('Archived!!');
        }
    })
});

module.exports = router;

