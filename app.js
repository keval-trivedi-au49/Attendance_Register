import express from "express";
import dotenv from "dotenv";
import connectDB from "./configDB.js";
import router from "./routes/route.js";
import bodyParser from "body-parser";
dotenv.config();
connectDB();

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//routes 

app.use('/api',router);
app.use(express.json());
const port = process.env.PORT || 8000;


app.listen(port,() => {
    console.log(`app is running on port ${port}`)
});