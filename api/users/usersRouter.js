const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtKey } = require('../../auth/authenticate.js');
const db = require('./usersHelper.js');
const userRouter = express.Router();

module.exports = userRouter;