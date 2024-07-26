const mongoose=require('mongoose')
const MONGOURI="mongodb+srv://jaysharma89533:vlVxk1Kp0jUAqOeP@jaymongodb.fdlxsvh.mongodb.net/Hanuman-Communication";

const connectToMongo = async () =>{
  
 mongoose.connect(MONGOURI)
 .then(()=>{
  console.log("Mongodb connected successfully")
 })


  
}

module.exports=connectToMongo;