
var express = require('express');
var fs = require('fs');
var app = express();

const dataPath = 'data';
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var profile_obj = JSON.parse(fs.readFileSync(dataPath + '/profile.json', 'utf8'));

// Routes
app.get('/', (req, res) => {
    res.render('pages/index', profile_obj);
});

app.listen(port, () => {
    console.log("Application listening on port " + port);
});
