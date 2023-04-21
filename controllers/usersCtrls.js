// we're pulling in the models data that we have
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const { User } = require('../models')
console.log(db)



const getUser = (req, res) => {
    // res.send('This is getFund.')
    db.User.find({})
        .then((foundUser) => {
            if (!foundUser) {
                res.status(404).json({ message: 'cannot find the User' })
            } else {
                res.status(200).json({ data: foundUser })
            }
        })
}

const signInUser = async (req, res) =>{
    // this is taking the signIn user data and storing it here
    const {username, password} = req.body

    try {
        const user = await User.signIn(username, password)
        
        const sessionUser = {id: user._id, name: user.username, password: user.password}
        req.session.user = sessionUser
        
        res.status(200).json({sessionUser})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// this is how a user can sign up
const createUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)

        // we will create a token after they're saved in the database
        // const token = createToken(user._id)
        const sessionUser = {id: user._id, name: user.username, password: user.password}
        req.session.user = sessionUser

        res.status(200).json({ username, password })
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const logoutUser = async (req, res) =>{
    req.session.destroy((err) =>{
        if(err) throw err;
        res.clearCookie('session-id')
        return res.json({msg:'you hit this route'})
    })
}
    const checkAuth = async (req, res) =>{
        const sessionUser = req.session.user;
        if(sessionUser){
            return res.json({msg: 'Authenticated ', sessionUser})
        } else {
            return res.status(401).json({msg: 'unathorized'})
        }
    }



module.exports = {
    getUser,
    createUser,
    signInUser,
    logoutUser,
    checkAuth
}
