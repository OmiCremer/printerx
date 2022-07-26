const express = require('express')
const app = express()

const apiRouter = require('./router/apiRouter')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT || 3001, console.log('funcionando'))

app.use('/api', apiRouter)
