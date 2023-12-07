require('dotenv').config();

const sequelize = require('./config/connection');
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use('/', router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}!`);
  });
});