const express = require('express')
const app = express()

const apiRouter = require('./router/apiRouter')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('dotenv').config()

app.listen(process.env.PORT || 3002, console.log('funcionando'))

app.use('/api', apiRouter)
