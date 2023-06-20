const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AIQuestionSchema = new Schema({
  question1: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question2: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question3: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question4: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question5: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question6: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question7: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question8: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question9: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  question10: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
});

const AIQuestions = mongoose.model("AIQuestions", AIQuestionSchema);

module.exports = AIQuestions;
