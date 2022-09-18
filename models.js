const mongoose = require('mongoose')

const DetailsSchema = new mongoose.Schema ({
  fName:{type:String},
  lName:{type:String},
  phone:{type:String},

email:{type:String},
    adate:{type:String},
    ddate:{type:String},
    type:{type:String},
    noofguests:{type:String},


});
module.exports.DetailsSchema = DetailsSchema;