const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.use(express.json());
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.listen(1010);

app.get('/', (request, response) => {
    response.render('home', {
        name: 'Ivon'
    })
});

app.post('/seo-ivon', urlencodedParser, (request, response) => {
    console.log(request);
    let name = request.body.name;
    response.render('ivon', {
        name: name,
        src: '/ivon.jpg'
    })
});
app.get('/seo-profi', urlencodedParser, (request, response) => {
    console.log(request);
    let random =  getRandomInt(0,100);
    setTimeout(function () {
        response.render('random', {
            random: random,
        })
    }, 5000)

});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}