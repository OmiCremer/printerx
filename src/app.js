const express = require('express');
const app = express();
const path = require('path');

const routerIndex = require('./routers/routerIndex')

app.use(express.static(path.join(__dirname, '../public')))

app.set('views', path.resolve(__dirname, 'views'))

app.set('view engine', 'ejs');

app.listen(3002, console.log(' a ver si anda'));

app.use('/', routerIndex)