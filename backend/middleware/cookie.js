const express = require('express');
const cookieparser = require('cookieparser');

const app = express();

app.use(cookiesession({
    secret:'secret_key',
    resave: fasle,
    cookie:{maxAge:24*69*69*1000}
}))