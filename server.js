const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const Farbrad = require('./farbrad');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    let farben = Farbrad.getFarben();
    res.render('index', {farben: farben});
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
