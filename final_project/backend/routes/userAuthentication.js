
const jwt = require('jsonwebtoken')
const brcrypt = require('bcryptjs')
const User = require('../models/user.model')
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await brcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.json({ status: 'ok' })
    } catch (error) {
        res.json({ status: 'error', error: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        await User.find().then((data) => {
            res.json({ status : 'ok', data: data })
        })
    } catch (error) {
        res.json({ status: 'error', error: error.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return res.status(404).json({ status: 'error', error: 'User does not exists with this email Id' })
        }
        const isValidPassword = await brcrypt.compare(req.body.password, user.password)
        if (isValidPassword) {
            //sign JWT Token
            const token = jwt.sign(
                {
                    id: user._id
                }
                , "alksdjlskjfskldfjsdlkjfs")
            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        id: user._id,
        name: user.name,
        email: user.email
    });
});

module.exports = router;