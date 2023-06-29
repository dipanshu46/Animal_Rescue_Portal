const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

module.exports = router;