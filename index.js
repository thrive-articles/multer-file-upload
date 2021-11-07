const express = require('express');
const app = express();
var multer = require('multer');
var upload = multer({dest:'uploads/'});
const fs = require('fs');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
     },
    filename: function (req, file, cb) {
        cb(null , `${file.originalname}`);
    }
});

var upload = multer({ storage: storage });

app.post('/file', upload.single('file'), (req, res) => {
    fs.readFile('./uploads/sampleFile.txt', 'utf8', function(err, data){
        res.send(data);
    });
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('The server is up');
})