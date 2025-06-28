const mongoose = require('mongoose')

const connectDB = async ()=>{
     await mongoose.connect("mongodb+srv://akashdevstag:R7jb8iaXROQSOH51@devstag.ytgj1nh.mongodb.net/?retryWrites=true&w=majority&appName=devstag")
}

module.exports={
    connectDB
}
