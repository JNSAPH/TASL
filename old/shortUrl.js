const mongoose = require('mongoose');
const shortId = require('shortid')

const sUSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        require: true
    },
    UrlCode: {
        type: String,
        required: true,
        default: () => shortId.generate

    },
    clicks: {
        type:  Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('ShortUrl', sUSchema)