const express = require('express')
const Burger = require('../models/burger')

const router = express.Router()

// router.get('/', function(req, res) {
//     res.redirect('/index')
// })

router.get('/', async function(req, res) {
    const burgers = await Burger.selectAll()
    res.render('index', {burgers})
})

router.get('/api/burgers', async function(req, res) {
    try {
        const burgers = await Burger.selectAll()
        res.status(200).json({data:burgers})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/api/burgers', async function(req, res) {
    try {
        const burger = await new Burger(req.body)
        const result = await Burger.insertOne(burger.burger_name)
        burger.id = result.insertId
        res.status(201).json({data: burger})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/api/burgers/:id', async function (req, res) {
    try {
        const burger = await Burger.deleteOne(req.params.id)
        res.status(200).json({data: burger})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router