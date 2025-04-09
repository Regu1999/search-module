require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const { runDb } = require("./util/database")
const foodRouter = require("./controler/food")

const app = express();
const PORT = process.env.PORT

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser())

app.use(foodRouter)

runDb(() => app.listen(PORT))
