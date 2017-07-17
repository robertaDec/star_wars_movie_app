/**
 * Created by roberta.de on 2017-07-14.
 */
//this require the express module
var express = require('express');

//app is a new express application and has all the methods that app has
var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


//Routes

//home
app.get('/', routes.home);

//movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//noFound
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);