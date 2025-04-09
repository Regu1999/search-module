require("dotenv").config()

const mongoose = require("mongoose")
const DBURL = process.env.DATABASE_URL
async function runDb(callback) {
    try {
        const db = await mongoose.connect(DBURL)
        callback()
    } catch (error) {
        throw {message: "Unable to connect database Try again later"}
    }
}

module.exports = { runDb }