import express from "express";
import { submitFeedback } from "../controller/contact.controller.js"; // Import the controller function

const router = express.Router();

// POST route for submitting contact form feedback
router.post("/submit", submitFeedback); // Route for handling submissions

export default router;
