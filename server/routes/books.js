import BookModel from "../models/books.js";
import express from 'express';
import UserModel from "../models/users.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const router =express.Router();

router.post("/",async(req,res)=>{
    const book=await new BookModel(req.body);
    await book.save();
    res.json({msg:"success"})
})

router.get('/getmybooks/:id',async(req,res)=>{
    try{
      const id=req.params.id;
      const books=await BookModel.find({Owner:id});
      res.json(books)
    }
    catch(e){
       console.log(e)
    }
 
  })

router.get('/getbyid/:id',async(req,res)=>{
    try{
      const id=req.params.id;
      const OWNER=await UserModel.find({_id:id});
      res.json(OWNER)
    }
    catch(e){
       console.log(e)
    }
 
  })

  router.get('/deleteit/:id',async(req,res)=>{
    try{
      const id=req.params.id;
      const book=await BookModel.deleteOne({_id:id});
      res.json({msg:"Delete successfully"})
      
    }
    catch(e){
       console.log(e)
    }
 
  })

 // Authentication middleware using JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token) {
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token.' });
      }  
      req.user = decoded; // Save the decoded user information in the request object
      next();
    });
  } else {
    res.status(401).json({ message: 'No token provided.' });
  }
};

router.get('/getall', authenticateJWT, async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.json(books);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server Error' }); // Handle server errors
  }
});




export {router as BookRouter};
