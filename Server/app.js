const express = require('express')
const cors=require("cors")
const mongoose=require("mongoose")
const app = express()
const port = 9000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())








// middleware routers


const productroute=require("./Route/ProductRoute")

app.use(productroute)



const mongoDB = "mongodb://127.0.0.1/mechinetest";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(mongoDB);
  console.log("db connected");
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})