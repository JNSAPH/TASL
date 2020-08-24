// Mongoose
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

// Express
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

// Customshort gets Generated by Angular Frontend
app.get('/TASL/createShort/:url/:customshort', async (req, res) => {
    if(!req.params.url || !req.params.customshort) return res.send({code: 400}).status(400)
    if(await ShortUrl.exists({short: req.params.customshort})) return res.send({code: 400, message:"Short ID already in use."})

    await ShortUrl.create({
        full: req.params.url,
        short: req.params.customshort
    })

    res.send({code: 201}).status(201)
})

app.get('/TASL/getShortDetails/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if(shortUrl === null) return res.send({code:404}).status(404)

    res.send({
        code:200,
        full: shortUrl.full
    }).status(200)
})

app.get('/TASL/getShortDetails/', async (req, res) => {
    res.send(await ShortUrl.find()).status(200)
})

app.get('/TASL/deleteShort/:shortUrl', (req, res) => {
    ShortUrl.deleteOne({short: req.params.shortUrl }, function (err) {
        if (err) return res.send(err)
    })

    res.send({code: 200}).status(200)
})

app.get('/:shortUrl', async (req, res) => {
    const full = await ShortUrl.findOne({short: req.params.shortUrl})
    res.redirect('https://' + full.full)
    console.log(full)
})

app.listen(port, () => {
    console.log(`ThatsaShort.link Backend listening at http://localhost:${port}`)
})
