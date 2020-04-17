const express = require('express');
const router = express.Router();
const mysql = require('../connection');

router.get("/", (req, res) => {
    const sql = "SELECT * FROM board WHERE idx BETWEEN ? AND ?";
    mysql.query(sql, [1,10], (err, rows) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    })
});

router.get('/:idx', (req, res) => {
    const sql = "SELECT * FROM board WHERE idx=?";
    mysql.query(sql,[req.params.idx], (err, rows) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    })
})

module.exports = router;