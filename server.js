const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const config = require('./config.json')
const package = require('./package.json')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

// Set View engine and some basic express Stuff
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// Express Setup
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls , package: package })
})

// User types in URL
app.post('/shorten', async (req, res) => {

  // APH needs to rewrite this!
  if (req.body.customShort) {
    await ShortUrl.create({ 
        // User priveded a Custom Alias
        full: req.body.fullUrl, 
        short: req.body.customShort
      })
  } else {
    await ShortUrl.create({ 
        // No Alias provided | (Custom ID gets generated in /models/shortUrl.js)
        full: req.body.fullUrl, 
      })
  }

  res.redirect('/')
})

// User deletes URL
app.post('/delete', async (req, res) => {
  ShortUrl.deleteOne({ short: req.body.delete }, function (err) {});

  res.redirect('/')
})

// User tries to access URL
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})

console.log(`Server started on port ${config.port}`)

app.listen(process.env.PORT || config.port);