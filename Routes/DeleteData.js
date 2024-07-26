const express=require('express');
const router=express.Router();
const StoreData = require('../Models/StoreData');

router.post('/',(req,res)=>{
    let result=req.body;
    let id=result._id
    StoreData.deleteOne({_id:id});
    res.send({msg:"id get successfully"});
})
module.exports=router;