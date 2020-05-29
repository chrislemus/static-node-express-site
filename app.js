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



app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});