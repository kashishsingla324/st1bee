const mongoose = require('mongoose');

const bookSchema= mongoose.Schema({
    name:{type:String, required:true},
    genre:{type:Array},
    authorName:{type:String},
    price:{type:Number},
    publishDate:{type:String},
    rating:{type:Number},
    comments:{type:Array}
},{timestamps:true})

const bookModel = mongoose.model("ReadersHub",bookSchema);
module.exports= bookModel;