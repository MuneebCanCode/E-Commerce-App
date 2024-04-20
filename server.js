import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// configure env
dotenv.config();

// database config
connectDB();

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// rest api
app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to ecommerce app'
    });
});

// port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`.bgCyan.white);
});
