const Question = require('../model/question.model.js');

// Get an answer based on the question
exports.getAnswer = async (req, res) => {
    const userQuestion = req.query.question;

    try {
        const result = await Question.findOne({ question: userQuestion });
        if (result) {
            res.json({ answer: result.answer });
        } else {
            res.status(404).json({ message: 'Question not found.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data from database.', error: err });
    }
};

// Add a new question-answer pair to the database
exports.addQuestion = async (req, res) => {
    const { question, answer } = req.body;

    try {
        const newQuestion = new Question({ question, answer });
        await newQuestion.save();
        res.status(201).json({ message: 'Question added successfully!', question: newQuestion });
    } catch (err) {
        res.status(400).json({ message: 'Error adding question.', error: err });
    }
};
