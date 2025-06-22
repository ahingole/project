const express = require("express");

const app = express();

// app.use((req,res)=> {
//     res.send("hello form the tester");
// });

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

app.get("/user/:useriD", (req, res) => {
  // console.log(req.query)
  console.log(req.params)
  res.send({
    name: "user1",
    address: "washim maharashtra"
  });
});

// app.get("/hello",(req,res)=>{
//     res.send({
//         name:"akkash",
//         address:"washim maharashtra"
//     })
// }) // this route only match /hellow 

// app.use("/hello",(req,res)=> {
//     res.send("hello with route");
// });
app.post("/hello",(req,res)=>{
    console.log("save data on post")//save data to db
    res.send("data successfully saved")
})

app.delete("/hello",(req,res)=>{
console.log("delere")
res.send("detele successfully")
})

app.listen(3000,()=>{
    console.log('listinng the server 3000')
})