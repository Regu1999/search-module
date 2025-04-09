const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name: String,
    restorentName: String,
    avatar: String,
    rating: Number,
    review: Array
})

module.exports=mongoose.model("foods", foodSchema)