const express = require('express');
const router = express.Router();
const db = require('../connection');

router.get('/', (req, res) => {
    db.query("select * from topic;", (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            res.send(err);
        }
    })
});

module.exports = router;