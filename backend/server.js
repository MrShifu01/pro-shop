import express from "express" // add type:module to be able to do this
import products from "./data/products.js"
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/db.js"

const port = process.env.PORT || 5000

connectDB() // COnnect to Mongo DB

const app = express()

app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(port, () => {
    console.log(`Server running in development mode on port ${port}`);
  });