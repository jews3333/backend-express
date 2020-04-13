const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const mysql = require('../connection');

router.get('/data', (req, res) => {
    mysql.query("select * from topic;", (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            res.send(err);
        }
    })
});

fs.readdir('upload', (error) => {
    if (error) {
        fs.mkdirSync('upload');
    }
})

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'upload/');
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
});

router.post('/upload', upload.single('img'), (req, res) => {
    console.log(req.file);
    res.json({ url : `/img/${req.file.filename}`});
});

module.exports = router;