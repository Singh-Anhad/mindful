import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Importing existing routes
import bookroute from "./route/bookroute.js";
import userRoute from "./route/user.route.js";
import contact from "./route/contact.route.js"; 
import newsfeed from "./route/news.route.js";
import question from "./route/question.route.js";
// Importing community route
import communityRoute from "./route/community.route.js"; 
import genre from "./route/genre.route.js";// Adjust the path as necessary
import sentiment from "./route/sentiment.route.js"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.Mongo_URI;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Connect to DB
connectDB();

// Define routes
app.use("/book", bookroute);
app.use("/user", userRoute);
app.use("/contact", contact); 
app.use("/api/news", newsfeed);
app.use("/api/question", question);
// Define community route
app.use("/api/community", communityRoute); // Add community route here
app.use("/api/genre", genre);
app.use('/api/sentiment', sentiment);
// Start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
