// Express Setup
const express = require('express')
var jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(cors({origin: ["http://localhost:4200"], credentials: true}));

// Mongoose
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const Accounts = require('./models/accounts')
mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
})

const bcrypt = require('bcrypt');

// Config
const port = 3000
const config = require('./config.json')

// Middleware for Authentication
function aphAuth(req, res, next){
    if (!req.headers.authorization || !jwt.verify(req.headers.authorization, config.secretkey)) {
        console.log("Invalid request.")
        return res.send({code: 401, message:"Unauthorized"}).status(401)
    }
    console.log("Request valid.")
    next();
}

/*
*   @GET - / | Serve Index
*
*/
app.get('/', (req, res) => {
    res.sendFile('index.html')
})


/*
*   @GET - :shortUrl | Redirect to full URL
*
*   Response:
*       - Redirect to Full URL
*/
app.get('/:shortUrl', async (req, res) => {
    const full = await ShortUrl.findOne({ short: req.params.shortUrl })
    try {
        full.clicks++
        full.save();
        res.redirect(full.full)
    } catch (error) {
        res.send("The URL you were trying to access doesn't exist.").status(404)
    }
})

/*
*   @POST - createShort | Inject Short & Full URL into Database
*
*   Response:
*       - 401: Unauthorized Access. ||  201: Entry created
*/
app.post('/TASL/createShort/', aphAuth, async (req, res) => {
    if (!req.headers.long || !req.headers.short) return res.send({ code: 400 }).status(400)
    if (await ShortUrl.exists({ short: req.headers.short })) return res.send({ code: 400, message: "Short ID already in use." })

    await ShortUrl.create({
        full: req.headers.long,
        short: req.headers.short
    })
    res.send({ code: 201 }).status(201)
})

/*
*   @GET - getShortDetails | Get Individual Details of ShortURLs
*
*   Response:
*       Object containing:
            - code: 200
            - full: Full URL that got shortend
*/
app.get('/TASL/getShortDetails/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl === null) return res.send({ code: 404 }).status(404)

    res.send({
        code: 200,
        full: shortUrl.full
    }).status(200)
})

/*
*   @GET - getShortDetails | Get Details of all ShortURLs
*
*   Response:
*       Objects containing:
            - clicks: Total Clicks on that URL
            - _id: Internal URL ID
            - full: Full URL that got shortend
            - short: User given Short ID
            - __v:
*/
app.get('/TASL/getShortDetails/', async (req, res) => {
    res.send(await ShortUrl.find()).status(200)
})

/*
*   @POST - deleteShort | Delete URLs
*
*   Response:
*       - 401: Unauthorized Access. ||  200: Entry Deleted
*/
app.post('/TASL/deleteShort', aphAuth, (req, res) => {  
    ShortUrl.deleteOne({ short: req.headers.short }, function (err) {
        if (err) return res.send(err)
    })

    res.send({ code: 200 }).status(200)
})

/*
*   @GET - getStats | Get Stats about the Usage of TASL
*
*   Response:
*       - totalUrls: Total URLs in Database
*       - totalClicks: Total Clicks on all Links in Database
*/
app.get('/TASL/getStats', async (req, res) => {
    let clicks = 0;
    let shortUrls = (await ShortUrl.find())

    for (let index = 0; index < shortUrls.length; index++) {
        const element = shortUrls[index];
        clicks += element.clicks
    }

    res.send({
        totalUrls: shortUrls.length,
        totalClicks: clicks,
        totalAccounts: Accounts.length
    })
})

/*
*   @POST - login | Generate JWT and send it to Client
*/
app.post('/TASL/login', async(req, res) => {
    let masterUsername = config.username;
    let masterPassword = config.password;

    var username = await Accounts.findOne({ "username": req.headers.username })
    try {
        if(await bcrypt.compare(req.headers.password, username.password) || req.headers.username == masterUsername && req.headers.password == masterPassword) {
            // Password correct
            let payload = { subject: req.headers.username}
            let token = jwt.sign(payload, config.secretkey)

            return res.send({ code: 200, message: "Logged in.", token: token}).status(200)
        } else {
            // Password incorrect
            return res.send({
                code: 418,
                message: "Incorrect Username and or Password."
            }).status(418)
        }
    } catch (error) {
        // Account doesn't exist
        return res.send({
            code: 500,
            message: "Account doesn't exist."
        }).status(500)
    }
})

/*
*   @POST - login | Generate JWT and send it to Client
*/
app.post('/TASL/register', aphAuth, async(req, res) => {
    if(req.headers.master !== config.password) return res.send({"message":"Master Password required"})
    var username = await Accounts.findOne({ "username": req.headers.username })
    try {
        console.log(username.username)
    } catch (error) {
        Accounts.create({
            username: req.headers.username,
            password: await bcrypt.hash(req.headers.password, 10)
        })
        return res.send({"message":"Account created."})
    }

    return res.send({"message":"Account already exists."})
})




app.listen(port, () => {
    console.log(`ThatsaShort.link Backend listening at http://localhost:${port}`)
})