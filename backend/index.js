require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT= process.env.PORT || 8000
const databaseUrl=process.env.DATABASE_URL
const app = express();
const orgRouter = require('./src/organizers/routes/organizer.js');
const eventRouter = require('./src/events/routes/events.js');
const customerRouter = require('./src/customer/routes/customer.js');
const { restrictToLoggedInUsers } = require('./src/middlewares/middleware.js');
// console.log(databaseUrl)
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
mongoose.connect(databaseUrl)
  .then(() => console.log('db connected'))
  .catch((err) => console.log('db connection failed', err));

app.use('/org', orgRouter);
app.use('/events', restrictToLoggedInUsers, eventRouter);
app.use('/customer', customerRouter);


app.listen(PORT, () => {
  console.log('server started')
});
