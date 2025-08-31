const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");
const {validateSignUp} = require('./utils/validation')
const bcrypt = require("bcrypt");
//TO  add  express middleware to conevert json into object
app.use(express.json())

app.post("/signUp", async (req, res) => {
  try {

    validateSignUp(req);
    const saltRounds=10;
    
    const hashpw= await bcrypt.hash(req.body?.password, saltRounds);
    const user = new User({...req.body,password:hashpw});

    await user.save();
    res.send("user added sucessfully...");
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

// log in 

app.post("/login", async (req, res) => {
  const { emailId, password } = req.body;

  try {
    // find user by email
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    // compare entered password with hashed password in DB
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      res.send("User logged in successfully");
    } else {
      return res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error(err);
    res.status(400).send("Bad request");
  }
});

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
app.patch("/user/:userId", async(req, res)=>{
const userId= req.params?.userId
const data = req.body

try{
  const ALLOWED_FIELDS= ["age","skills","gender","firstName","about","photoUrl","password"]
  const isAllowed = Object.keys(data).every((k)=>
    ALLOWED_FIELDS.includes(k)
  )
  if(!isAllowed){
throw new Error("update not allowed")
  }
  if(req.body?.skills.length > 12){
    throw new Error("skill lenght should not be more than 12")
    
  }
  await User.findByIdAndUpdate({_id:userId}, data,{returnDocument:"after",runValidators:true});
  res.send("userß updated successfully")
}catch(err){
  res.status(400).send("Faild to update user"+ err.message)
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
