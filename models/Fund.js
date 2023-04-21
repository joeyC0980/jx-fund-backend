// now we will create a funds model 
const mongoose = require("mongoose")

// this is the schema and the attributes we want to show on the page 
const FundSchema = new mongoose.Schema({
    name: String,
    company: String,
    symbol: String,
    description: String,
    recommendation: String,
    date: Date,
    timezone: String,
    price: Number,
    dividends: Number
}, {
    timestamps:
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


// now we need to create a model from our schema 
const Fund = mongoose.model("Fund", FundSchema)

module.exports = Fund