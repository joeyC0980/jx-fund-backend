// setting up the database model, require mongoose
const mongoose = require("mongoose")
const {DATABASE_URL} = process.env

// Establish Database connection, not much will change from unit 2 
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })

// Connection Events
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error))

// export the models 
module.exports={
    Fund: require("./Fund.js"),
    // now if we HAD another model in models folder then we could add it here
    User: require('./users.js') 
}
