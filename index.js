const express = require('express')
var logger = require('morgan');
const app  = express();
var path = require('path');

app.use(logger('dev'))


// general config
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use('/api/v1', require('./controllers/api_v1'));
// app.use('/api/v2', require('./controllers/api_v2'));

app.use('/v1', require('./controllers/api_star'));

app.get('/', function(req, res,next) {
    res.send('Hello from root route.')
});



/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
