const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('users');
});

module.exports = userRouter;