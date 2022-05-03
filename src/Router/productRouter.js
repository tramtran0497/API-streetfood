const express = require("express")
const Product = require("../Models/Product")
const router = new express.Router()

router.get("/products", async(req, res) => {
    try{
        const products = await Product.find()
        res.send(products)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get("/product/:id", async(req, res) => {
    const {id} = req.params
    try{
        res.send("A product")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.post("/products", async(req, res) => {
    const product = new Product(req.body)
    try{
        await product.save()
        res.send(product)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/product/:id", async(req, res) => {
    const {id} = req.params
    try{
        res.send("Change a product")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/product/:id", async(req, res) => {
    const {id} = req.params
    try{
        res.send("Delete a product")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router