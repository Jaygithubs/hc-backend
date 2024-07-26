const express=require('express');
const router=express.Router();
const storeData=require('../Models/StoreData');
const { default: mongoose } = require('mongoose');


router.post('/',(req,res)=>{
   
    const storedata=storeData(req.body);
    storedata.save();
    res.send(req.body);
})
module.exports=router;