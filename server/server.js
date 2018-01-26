const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User'); //created model loading here
const Video = require('./models/Video'); //created model loading here
const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, '../client'));
// app.use(express.static(path.join(__dirname, '../client')));
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));


const dotenv = require('dotenv').config();

const uristring =

process.env.MONGOLAB_URL ||
'mongodb://localhost:27017/trotseeLocal';

mongoose.connection.openUri(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

// app.use('/', routes);
const routes = require('./routes/route'); 
routes(app); //register the route

 // app.get('/', function(req, res){
 //    res.render('index')
 //  });

  
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'../client/build/index.html'));
// });

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`trotsee app listening on ${port}`);