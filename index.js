const express = require('express')
const app = express()
const cors=require('cors')
const connectToMongo=require('./db')
const port = 4000

connectToMongo();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/storeData',require('./Routes/StoreData'));
app.use('/allData',require("./Routes/AlldataFetch"));
app.use('/deleteData',require("./Routes/DeleteData"))

app.listen(port, () => {
  console.log(`HC backend app listening on port ${port}`)
})