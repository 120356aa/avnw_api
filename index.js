const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const APP_URL = process.env.APP_URL || 'http://localhost:5000';
const DB = process.env.DB_URL;

const helmet = require('helmet');
const morgan = require('morgan');

const userRouter = require('./api/users/usersRouter.js');
const servicesRouter = require('./api/services/servicesRouter.js');
const photographersRouter = require('./api/photographers/photographersRouter.js');
const storeRouter = require('./api/store/storeRouter.js');
const trackingRouter = require('./api/tracking/trackingRouter.js');
const merchOrdersRouter = require('./api/merchOrders/merchOrdersRouter.js');
const serviceOrdersRouter = require('./api/serviceOrders/serviceOrdersRouter.js');

// Cors Init
const corsOptions = {
  origin: APP_URL,
  optionsSuccessStatus: 200
};

const app = express();

// Server Init
app.use(
  express.json(),
  cors(corsOptions),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  helmet(),
  morgan('dev')
);

// Routes
app.use('/user', userRouter);
app.use('/services', servicesRouter);
app.use('/photographers', photographersRouter);
app.use('/store', storeRouter);
app.use('/tracking', trackingRouter);
app.use('/merch-orders', merchOrdersRouter);
app.use('/service-orders', serviceOrdersRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`)); 

module.exports = app;