import mongoose from "mongoose";
import express from "express"
import cookieParser from "cookie-parser"

/* ---------------------------------------- */
import connectToDB from "./config/connectionDB.js";
import authRoutes from "./routes/authRoutes.js"
import shortenLink from "./routes/shortenLinkRoutes.js"

connectToDB()

const app = express()
app.use(express.json())
app.use(cookieParser())
const port = 5000


app.use('/api_auth', authRoutes)
app.use('/api_shorten', shortenLink)

app.get('/', (req, res) => {
    res.send('Hello World!')
})









mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(port, () => {
        console.log("Server Running On Port =>", port);
    });
});

mongoose.connection.on("error", () => {
    console.log(error);
});