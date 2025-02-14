const mongoose = require("mongoose")

const connectDB = () => mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to Db");
    })
    .catch((error) => {
        console.error(`failed to connect: ${error}`)
        process.exit(1)
    })

module.exports = connectDB