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
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: false }))

// User tries to access URL
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})

// Basic ass Authentication | Will change later | Default User: admin, Default Password: 12345 (change in config.json)
app.use((req, res, next) => {
  const auth = {login: config.user, password: config.password}

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  // Verify login and password are set and correct
  if (login && password && login === auth.login && password === auth.password) {
    // Access granted...
    return next()
  }

  // Access denied...
  res.set('WWW-Authenticate', 'Basic realm="401"')
  res.status(401).send('Authentication required.')

})

// Express Setup
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls , package: package })
})

// User shortens URL
app.post('/shorten', async (req, res) => {

  // Check if User supplied a URL
  if(!req.body.fullUrl){
    res.status(403).send('Please Type in a URL.') // custom message
    return;
  }

  // Check if User provieded a Custom Alias
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



console.log(`Server started on port ${config.port}`)

app.listen(process.env.PORT || config.port);