const validator = require('validator')

const validateSignUp=(req)=>{
const{firstName,lastName,emailId,password}=req.body;
if(!firstName ||!lastName){
    throw new Error("plese make sure this field available")
}
if(!validator.isEmail(emailId)){
    throw new Error('make sure the correct format')
}
if(!validator.isStrongPassword(password)){
    throw new Error('please creare strong password')
}
}
module.exports={
    validateSignUp
}