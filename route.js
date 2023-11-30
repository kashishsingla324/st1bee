const express =  require("express");
const router=express.Router();
const {showData,showId,createData,updateData,deleteData}= require("../controller/bookcontroller");
const bookModel = require("../model/bookData");


router.get("/show",showData);
router.post("/show/id",showId);
router.post("/create",createData);
router.post("/update",updateData);
router.post("/delete",deleteData);
router.get("/sort",async(req,res)=>{
    const book = await bookModel.find().sort({"name":1});
    res.send(book);
})

module.exports=router;