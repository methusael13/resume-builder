
var express = require('express');
var app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(port, () => {
    console.log("Application listening on port " + port);
});
