import express from "express" // add type:module to be able to do this
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorHandler.js"

const port = process.env.PORT || 5000

connectDB() // Connect to Mongo DB

const app = express()

app.get("/", (req, res) => {
    res.send("API is running")
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running in development mode on port ${port}`);
  });