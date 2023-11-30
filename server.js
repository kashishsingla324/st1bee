const express = require("express");
const app= express();
const connectToDb = require("./db/connection");
const bookRoute = require("./routes/route");
app.use(express.json());

connectToDb();
app.use('/book',bookRoute);
app.listen('3000',()=>{
    console.log("server started");
})