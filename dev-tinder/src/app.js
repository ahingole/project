const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

//TO  add  express middleware to conevert json into object
app.use(express.json())

app.post("/signUp",async(req,res)=>{
  console.log(req.body)
  const user= new User(req.body)
try{
  await user.save();
  res.send("user added sucessfully...")
}catch(err){
  res.status(400).send("not found"+ err.message)
}
})

connectDB()
  .then(() => {
    console.log("connection established successfully ....");
    app.listen(3000, () => {
      console.log("listinng the server 3000");
    });
  })
  .catch(() => {
    console.log("connection not happend...");
  });
