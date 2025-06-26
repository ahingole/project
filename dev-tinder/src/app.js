
const express = require("express");
const {auth} = require("./middlewares/auth")

const app = express();


app.use("/user",auth);

app.get("/user/alluser",(req,res)=>{
  res.send("got all data successfully")
})

app.post("/user/newprofile",(req,res)=>{
  res.send("got all new profiledata")
})
// app.get("/ab?c", (req, res) => {
//   res.send({
//     name: "akkash",
//     address: "washim maharashtra"
//   });
// });
// app.get("/ab+c", (req, res) => {
//   res.send({
//     name: "akkash",
//     address: "washim maharashtra"
//   });
// });

// app.get("/user/:useriD", (req, res) => {
//   // console.log(req.query)
//   console.log(req.params)
//   res.send({
//     name: "user1",
//     address: "washim maharashtra"
//   });
// });


app.listen(3000,()=>{
    console.log('listinng the server 3000')
})