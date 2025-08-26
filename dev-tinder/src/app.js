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

//to get a data base on some keys we can do thisby 
app.get("/user", async(req, res)=>{
  const email=req.body.emailId;

  try{ 
    const userData = await User.findOne({emailId:email})
 res.send(userData)
  }catch(err){
    res.status(400).send("someting went wrong")
  }
})

//this api was to delete the user 
app.delete("/user", async(req, res)=>{
  const userId=req.body._id
  try{
    await User.findOneAndDelete(userId)
    res.send("user has been deleted successfully")
  }catch(err){
    res.status(400).send("somethig went wrong§")
  }
})
//api for update and 
//diffrence between patch and put 
app.patch("/user", async(req, res)=>{
const userId= req.body.userId
//lets try with email id
const data = req.body
try{
  await User.findByIdAndUpdate({_id:userId}, data,{returnDocument:"after"});
  res.send("user updated successfully")
}catch(err){
  res.status(400).send("something went wrong")
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
