const express=require('express');
const router=express.Router();
const StoreData = require('../Models/StoreData');

router.get('/',(req,res)=>{
    
    StoreData.find()
    .then(data => {
      res.json({data}); // Send JSON response with fetched data
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
    });
})
module.exports=router;