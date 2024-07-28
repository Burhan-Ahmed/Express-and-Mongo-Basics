const bodyParser = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static(__dirname + '/public'))

app.use(bodyParser.json())
const middlewareData = ((req, res, next) => {
    req.time = new Date().toString();
    next();
});

// GET Operations

app.get('/now', middlewareData, (req, res) => {
    res.send({ time: req.time });
});

app.get('/name', (req, res) => {
    const firstname = req.query.first
    const lastname = req.query.last
    res.send({ name: `${firstname} ${lastname}` })
})

app.get('/:word/echo', (req, res) => {
    const work = req.params.word
    res.send({ echo: work })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/json', (req, res) => {
    const mySecret = process.env['MESSAGE_STYLE']
    if (mySecret == 'uppercase') {
        res.json({ "message": "HELLO JSON" });
    }
    else {
        res.json({ "message": "Hello json" });
    }

})
// POST Operations

app.post('/name', (req, res) => {
    const fname = req.body.first + " " + req.body.last
    res.json({ name: fname })
})










module.exports = app;