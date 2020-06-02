
const express = require('express');
const Router = express.Router();

const session = require('express-session');

const goods = require('./goods'); // express.router()
const user = require('./user');
const verifycode = require('./verifycode');

// 设置session
// 给每个用户设置sessionid，用来识别每个用户的请求是否为同一个人
Router.use(session({
    secret: 'laoxie',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 2 }
}))

Router.use(express.json(), express.urlencoded())
Router.use('/goods', goods);
Router.use('/user', user);
Router.use('/verifycode', verifycode);



module.exports = Router