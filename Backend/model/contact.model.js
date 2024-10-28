import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  
});

const Contact = mongoose.model('Contact', ContactSchema,'community_posts');

export default Contact;
