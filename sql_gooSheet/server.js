const express = require("express");
const app = express();
require("dotenv").config()
const data = require("./data")
const mongoose = require("mongoose")
const dataBasePopulate = require("./routes/DataBasePopulate")
const convertToExcel = require("./routes/convertToExcel");
const convertToGoogleSheet = require("./routes/convertToGoogleSheet");
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/dataBasePopulate/",dataBasePopulate);
app.use("/api/convertToExcel/", convertToExcel)
app.use("/api/convertToGoogleSheet/", convertToGoogleSheet)

///connect to data base
mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("connected to database"))

app.get("/", (req, res)=>{
    res.status(200).json({"data":data})
})



app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`)
})