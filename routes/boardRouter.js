const express = require('express');
const router = express.Router();
const mysql = require('../connection');

router.get("/", (req, res) => {
    const sql = "SELECT * FROM board";
    mysql.query(sql, (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            res.send(err);
        }
    })
});

router.get('/:idx', (req, res) => {
    const sql = "SELECT * FROM board WHERE idx=?";
    mysql.query(sql,[req.params.idx], (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            res.send(err);
        }
    })
})

module.exports = router;