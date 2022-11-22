require('dotenv').config();
require('./config/db').connect();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const MenuRoute = require('./routes/menu');
const OrderRoute = require('./routes/order');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));
// app.use(bodyParser.json());

app.use('/menu', MenuRoute);
app.use('/order', OrderRoute);

app.listen(process.env.PORT, () => {
  console.log('Listening on port 8000');
});
