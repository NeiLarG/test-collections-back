const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');
const passport = require('passport');
const db = require('./models');
const routers = require('./routers');
require('./config/passport');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(passport.initialize());
app.use('/api/v1', routers);
app.use(errorHandler());

db.sequelize.sync({ force: false })
  .then(() => {
    app.listen(app.get('port'), () => {
      console.log('Server listening on port %d in %s mode', app.get('port'), app.get('env'));
    });
  });

module.exports = app;
