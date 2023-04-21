// we're pulling in the models data that we have
const db = require('../models')
console.log(db)



// this route will get the Fund that we want to see
const getFund = (req,res) =>{
    // res.send('This is getFund.')
    db.Fund.find({}) 
    .then((foundFund)=>{
        if(!foundFund){
            res.status(404).json({message: 'cannot find the Funds'})
        } else {
            res.status(200).json({data: foundFund})
        }
    })
}

// this route will get the show Fund that we want to see
const showFund = (req,res) =>{
    // res.send('This is showFund.')
    db.Fund.findById(req.params.id) 
    .then((foundFund)=>{
        if(!foundFund){
            res.status(404).json({message: 'cannot find the Fund'})
        } else {
            res.status(200).json({data: foundFund})
        }
    })
}

// This will let us create a new fund
const createFund = (req,res) =>{
    // res.send('this is createFund')
    db.Fund.create(req.body)
    .then((createdFund)=>{
        if(!createdFund){
            res.status(400).json({message:'cannot create Fund'})
        } else {
            res.status(201).json({data: createdFund, message:'Fund created'})
        }
    })
}

// This will let us update a fund
const updateFund = (req, res) =>{
    // res.send('this is updateFund')
    db.Fund.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedFund) => {
        if(!updatedFund){
            res.status(400).json({Message: 'Could not update Fund'})
        } else {
            res.status(200).json({Data: updatedFund, Message: "Fund updated"})
        }
    })
}

// this will let us delete the fund
const deleteFund = (req,res) => {
    db.Fund.findByIdAndDelete(req.params.id)
    .then((deletedFund) => {
        if(!deletedFund){
            res.status(400).json({Message: 'Could not delete Fund'})
        } else {
            res.status(200).json({Data: deletedFund, Message: "Fund deleted"})
        }
    })
}

// this will export our routes/controllers
module.exports = {
    getFund,
    createFund,
    updateFund,
    deleteFund,
    showFund
}