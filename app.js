const express = require('express');
const AppError = require('./utils/appError');
const globleErrorhandle = require('./controller/errorHandler')
const usersRoute = require('./routes/usersRoute');
const helmets = require('helmet')
const rateLimit = require('express-rate-limit');
const sanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const xss = require('xss-clean')
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json({ limit: '14kb' }));
// app.use(helmets());
app.use(sanitize());
app.use(xss());
app.use(rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'to many request! Please Retry after 1hr'
}))
app.use(cors({
  origin:'*'
  }
));
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/bank/v1/user', usersRoute);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.all('*', (req, res, next) => {
  next(new AppError(`con't found ${req.originalUrl} on this server`, 404))
})

app.use(globleErrorhandle)

module.exports = app