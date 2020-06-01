
const express = require('express');
const Router = express.Router();

const goods = require('./goods'); // express.router()
const user = require('./user'); 

Router.use(express.json(),express.urlencoded())
Router.use('/goods',goods);
Router.use('/user',user);



module.exports = Router