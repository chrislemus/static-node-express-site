const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');


//===================
//  Routes
//===================

//importing routes
const mainRoutes = require('./routes');
const errorRoute = require('./routes/error');

//using routes
app.use(mainRoutes);
app.use(errorRoute);



// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});