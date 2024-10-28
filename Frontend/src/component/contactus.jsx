import React, { useState } from "react";
import Navbar from '../component/Navbar'; // Ensure Navbar is imported
import Footer from '../component/Footer'; // Ensure Footer is imported
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData); // Log form data

    try {
      const response = await fetch('http://localhost:4001/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Use formData here
      });

      if (response.ok) {
        setMessage("Thank you for your feedback!");
      } else {
        setMessage("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage("Error submitting feedback. Please try again.");
    }

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      issue: "",
    });
  };

  return (
    <>
    <Navbar />
    <section id="contact" className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mt-10">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have any feedback or facing an issue? We'd love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-100 shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="issue" className="block text-gray-700 font-bold mb-2">Issue or Feedback:</label>
              <textarea
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                rows="4"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Contact;