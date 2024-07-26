const mongoose=require('mongoose');
const { Schema } = mongoose;

const storeDataScheme = new Schema({
   
    name:{
        type: String,
        required: true
    },
    itemName:
    { 
        type: String, 
        required: true 
    },
      problem: 
    { 
        type: String 
    },
      rate: 
    { 
        type: Number, 
        required: true 
    },
    mobileNumber:
    {
      type:Number,
      required:true,
      unique: true
    },
      taxAmount: 
    { 
        type: Number, 
        default: 0 
    },
      totalAmount: 
    { 
      type: Number, 
      required: true 
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const invoiceData=mongoose.model("StoreData",storeDataScheme,"Hanuman-cummunication");
module.exports=invoiceData;