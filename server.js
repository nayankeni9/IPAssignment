require('./models/db');
require('./models/user.model');
//Importing Express
const express = require('express');
//Configuring path and express handlebars
const path = require('path');
const exphbs = require('express-handlebars');
//Importing body parser
const bodyparser = require('body-parser');
//Importing User controller from the controller folder
const userController = require('./controllers/userController');


var app = express();

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Joining views to the default directory
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname:'hbs',defaultLayout:'mainLayout',
layoutsDir:__dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000,()=>{
    console.log('Express Server started at port 3000');
});

//Configurnig the routing
app.use('/user', userController);