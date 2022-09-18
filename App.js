const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
app.use(bodyparser.urlencoded({extended:true}))
mongoose.connect("mongodb://localhost:27017/hotelDB",{useNewUrlParser: true})
const {
  DetailsSchema

} = require('./models.js');


const BookData = new mongoose.model("BookData", DetailsSchema);
// app.set('view engine',"ejs")
 app.use(express.static(__dirname));

app.get("/",function(req,res){
  res.sendFile(__dirname+'/project2.html');
})
app.post("/",function(req,res){
 const details=new BookData({
   fName:req.body.fname,
   lName:req.body.lname,
   phone:req.body.phone,
   email:req.body.email,
   adate:req.body.adate,
   ddate:req.body.ddate,
   type:req.body.type,
   noofguests:req.body.nos
 })

 details.save();
 res.redirect("/");
  // const fname=req.body.name;
})

app.listen(3000,function(req,res){
  console.log("Running")
})