import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Img:{
     type:String,
     required:true
    },
    Owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    author:{
        type:String,
        required:true
    },
    stock:{
        type: Boolean,
        required:true
    } 
,
    year:{
        type: Number,
        required:true
    } 
})

const BookModel = mongoose.model("Books", bookSchema);
export default BookModel;
