const auth=  (req,res,next)=>{
    let auth;
    let token="xyz"
    const authenticated= token==="xyz"
    if(!authenticated){
      res.status(403).send("unauthorise user")
    }
      next()
  }
  
 module.exports={
    auth
 }