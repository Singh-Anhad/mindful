import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const Question = mongoose.model('Question', QuestionSchema,'Questions');

export default Question;
