const bookModel = require("../model/bookData");

const showData = (req,res) => {
    bookModel.find().then(response =>{
        res.send(response)
        // console.log(response);
    })
    .catch(err => {
        res.json({
            message:'an error'
        })
    })
}

const showId = (req,res) =>{
    const id= req.body.id;
    bookModel.findById(id).then(response =>{
        res.send(response)
        // console.log(response);
    })
    .catch(err => {
        res.json({
            message:'an error'
        })
    })

}
const createData = (req,res) =>{
    const nbook = new bookModel({
        name:req.body.name,
        genre:req.body.genre,
        authorName:req.body.authorName,
        price:req.body.price,
        publishDate:req.body.publishDate,
        rating:req.body.rating,
        comments:req.body.comments
    }) 

    nbook.save().then(response =>{
        res.send("book is successfully added")
    })
}

const deleteData = (req,res) =>{
    const id= req.body.id;
    bookModel.findByIdAndDelete(id).then(response =>{
        res.send("one book is deleted")
    })
}

const updateData = (req,res) =>{
    const id=req.body.id;

    const data={
        name:req.body.name,
        genre:req.body.genre,
        authorName:req.body.authorName,
        price:req.body.price,
        publishDate:req.body.publishDate,
        rating:req.body.rating,
        comments:req.body.comments
    }

    bookModel.findByIdAndUpdate(id,{$set: data})
    .then(() =>{
        res.send(`data of book id ${id} has been successfully updated`)
    })
}

module.exports = {showData,showId,createData,updateData,deleteData};