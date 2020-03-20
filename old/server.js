// Packages and Stuff
const express = require('express')
const mongoose = require('mongoose')
const shortUrl = require('./models/shortUrl')
const app = express();

// Connect to Database
mongoose.connect('mongodb://localhost/thatsashortlink', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})

// Handle Requests
    // Handle /shorten Request (Button Click)
app.post('/shorten', async (req, res) =>
{
    await shortUrl.create({ full: req.body.fullUrl })
    res.redirect('/')
})

app.get('/:UrlReq', async (req, res) =>{
    const shortUrl = await shortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

// Start the Server
app.listen(process.env.PORT || 5000);