const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// const routes = require('./routes/route'); 
// routes(app); //register the route

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

// const config = require('./config');

// const uristring =
//     config ||
//     process.env.MONGOLAB_URL ||
//     'mongodb://localhost:27017/trotseeLocal';

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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/api/newapp', function(req, res){
	const hello = "good morning";
  res.json('hello sir taller')
});


const port = process.env.PORT || 3001;
app.listen(port);

console.log(`trotsee app listening on ${port}`);