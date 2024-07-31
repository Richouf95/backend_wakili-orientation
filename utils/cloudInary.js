const cloudInary = require('cloudinary').v2;

cloudInary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRETE
})

module.exports = cloudInary;