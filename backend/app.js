const express = require("express");
const app = express()

app.use(express.json())
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//routes
const games=require("./routes/gameRoute")
const user=require("./routes/userRoute")
app.use("/api/g1",games)
app.use("/api/g1",user)


module.exports = app;