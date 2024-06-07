const express=require('express') ; 
const app=express() ; 
const nodemailer=require('nodemailer') 

app.use(express.json());
app.post("/sendemail",(req,res)=>{
const {fromm,too,subjectt,textt}=req.body ; 
const transporter = nodemailer.createTransport({
  service:'gmail' , 
  auth :{
    user:'kg2303964@gmail.com',
    pass:'gurl@12345'
  }
})  
var mailOptions = {
  from: fromm,
  to: too,
  subject: subjectt,
  text:textt
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    return res.status(500).json({ error: error })
  } else {
    console.log('Email sent: ' + info.response);
    return res.json({ msg: "Email sent successfully" }); 
  }
});

})  

app.get("/",(req,res)=>{
  return res.send("hii")
;})
app.listen(4000,()=>{

})