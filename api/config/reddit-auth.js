const snoowrap = require('snoowrap');

const reddit = new snoowrap({
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDITUSERNAME,
    password: process.env.REDDITPASSWORD,
});

module.exports = reddit;
