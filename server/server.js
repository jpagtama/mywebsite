const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res, next) => {
    return res.send('<h1>Hello World</h1>')
})

app.listen(8000, () => {
    console.log('server is now listening')
})