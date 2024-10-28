import mongoose from "mongoose";

const bsSchema=mongoose.Schema({
    id: String,
name: String,
title: String,
price:Number,
 category: String,
image: String,

})
const Book=mongoose.model("Book",bsSchema);

export default Book;