// Import statement
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()


// connection to atlas
connectDB()

// mount products routes
app.use('/api/products', productRoutes)

// 404 catcher
app.use(notFound)

// 500 error middleware
app.use(errorHandler)


app.get('/', (req, res) => {
    res.send('API is running')
})



app.listen(PORT, console.log(`Shwippity shwoopity ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold))