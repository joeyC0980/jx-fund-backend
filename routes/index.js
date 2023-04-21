const router = require('express').Router()
const fundRoute = require("./fundRoutes")
const userRoute = require('./usersRoutes')

router.use('/jxfunds', fundRoute)
router.use('/users', userRoute)



module.exports = router; 