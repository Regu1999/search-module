const express = require("express");

const FoodsCollection = require("../model/food");

const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        const searchVal = req.query.search || "";
        const searchData = await FoodsCollection.find({
            $or: [
                { name: { $regex: searchVal, $options: "i" } },
                { restorentName: { $regex: searchVal, $options: 'i' } },
                { rating: { $eq: isNaN(Number(searchVal)) ? '' : searchVal } }
            ]
        }).sort({ rating: -1 }).limit(10).exec();

        const productId = searchData.map((item) => {
            return item._id
        });

        res.cookie("searchHitory", JSON.stringify(productId), {
            maxAge: 900000, 
            httpOnly: true, 
            secure: true, 
            sameSite: 'None'
        })
        res.send(searchData)
    } catch (error) {
        throw { message: 'Unable to find data' }
    }
});

router.get("/", async (req, res) => {
    const hostryCookies = req.cookies.searchHitory;
    console.log(hostryCookies);

    try {
        const searchHistroy = hostryCookies ? await FoodsCollection.find({ _id: { $in: JSON.parse(hostryCookies) } }) : []
        const recomended = await FoodsCollection.find({ rating: { $gt: 4 } })
            .sort({ rating: -1 })
            .limit(10).exec();
        res.send({ searchHistroy, recomended })
    } catch (error) {
        throw { message: "Value not found" }
    }
});

module.exports = router