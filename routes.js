const express = require('express');
const router = express.Router()
const {getConnectionStatus}=require('./db')


router.get('/',async  (req, res) => {
    const finalStatus = await getConnectionStatus()
    res.send(finalStatus)
 });

router.get("/ping", (req, res) => {
    res.send('pong');

});

module.exports = router