import Contact from "../model/contact.model.js"; // Import the Contact model

// Controller function to handle form submission
export const submitFeedback = async (req, res) => {
  try {
    const { name, email, issue } = req.body;

    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      issue,
    });

    // Save contact entry to the database
    await newContact.save();

    res.status(200).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback", error });
  }
};
