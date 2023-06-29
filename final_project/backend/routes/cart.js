const Cart = require('../models/cart.model')
const Pets = require('../models/pets.model')
const express = require('express')
const router = express.Router();

router.post('/addItem', async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user })
        if (cart) {
            // need to figure out the nested query to find the cart product with given product Id
            let cartWithProduct = await Cart.findOne({ "cartItems.pet": req.body.cartItem.pet, user: req.user })
            if (cartWithProduct) {
                // update the quntity if prouduct already exist
                // const newQuantity = cartWithProduct.cartItems.find((item) => {
                //     return item.pet.toString() === req.body.cartItem.pet.toString()
                // }).quantity + req.body.cartItem.quantity

                // if (newQuantity <= 0) {
                //     // removes Item if its quantity is less than equal to zero
                //     // await Cart.updateOne(
                //     //     { user: req.user },
                //     //     {
                //     //         $pull: {
                //     //             cartItems: {
                //     //                 product: req.body.cartItem.product,
                //     //             },
                //     //         },
                //     //     }
                //     // )
                // } else {
                //     // if product is new in cart then push item into cart
                //     await Cart.updateOne({ "cartItems.pet": req.body.cartItem.pet, user: req.user }, {
                //         $set: {
                //             "cartItems.$.pet": req.body.cartItem.pet,
                //             "cartItems.$.quantity": newQuantity
                //         }
                //     })
                // }
            } else {
                // push the product in item if it is not id
                await Cart.findByIdAndUpdate({ _id: cart._id }, {
                    $push: {
                        cartItems: req.body.cartItem,
                    }
                })
            }
            // return the new populated cart in the response
            cart = await Cart.findOne({ user: req.user }).populate("cartItems.pet")
            await Pets.findByIdAndUpdate(req.body.cartItem.pet, {
                isAdopted: true
            })
            res.json({ status: 'ok', data: cart.cartItems})
        } else {
            //create a new cart if not exist
            const cart = await Cart.create({
                user: req.user,
                cartItems: req.body.cartItem,
            })

            await Pets.findByIdAndUpdate(req.body.cartItem.pet, {
                isAdopted: true
            })
            res.json({ status: 'ok', items: cart })

        }
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

router.post('/removeItem', async (req, res) => {
    try {
        // remove the Item from cart
        await Cart.updateOne(
            { user: req.user },
            {
                $pull: {
                    cartItems: {
                        pet: req.body.cartItem.pet,
                    },
                },
            }
        )
        // return the new populated cart in the response
        cart = await Cart.findOne({ user: req.user }).populate("cartItems.pet")
        await Pets.findByIdAndUpdate(req.body.cartItem.pet, {
            isAdopted: false
        })
        res.json({ status: 'ok', data: cart.cartItems})      
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error })
    }
})

router.get('/', async (req, res) => {
    // get the list of cart Items
    try {
        let cart = await Cart.findOne({ user: req.user })
        if (!cart) {
            //create a new cart if not exist
            cart = await Cart.create({
                user: req.user,
                cartItems: req.body.cartItem,
            })
        }
        cart = await Cart.findOne({ user: req.user }).populate("cartItems.pet")
        res.json({ status: 'ok', data: cart.cartItems})
    } catch (error) {
        res.json({ status: 'error', error: error })
    }
})

module.exports = router;