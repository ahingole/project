const express = require("express");

const app = express();

// app.use((req,res)=> {
//     res.send("hello form the tester");
// });
app.use("/hello",(req,res)=> {
    res.send("hello with route");
});

app.listen(3000,()=>{
    console.log('listinng the server')
})