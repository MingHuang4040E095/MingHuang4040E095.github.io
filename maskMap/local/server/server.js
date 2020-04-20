const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()

    app.options('*', (req, res) => {
        // allowed XHR methods
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS')
        res.send()
    })
})

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`port ${port} is listening`)
})

const maskMapApi = require('./router/maskMapApi')
app.use('/maskMapApi', maskMapApi)

// app.use(express.static(path.resolve('./') + '/client/dist/'))
app.use(express.static(path.resolve('../') + '/client/dist/'))
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./') + '/client/dist/index.html')
})
