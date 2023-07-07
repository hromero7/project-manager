const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  promotion: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: {
        type: String,
      },
      email: {
        type: String,
      },
      userId: {
        type: String,
      },
      projectId: {
        type: String,
      },
    },
  ],
  members: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: {
        type: String,
      },
      email: {
        type: String,
      },
      userId: {
        type: String,
      },
      projectId: {
        type: String,
      },
    },
  ],
  date: {
    type: String,
    default: Date.now(),
  },
  questions: [
    {
      question1: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      question2: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      question3: {
        type: [String],
      },
      question4: {
        type: [String],
      },
      question5: {
        type: String,
        maxLength: 200,
        trim: true,
        required: true,
      },
      question6: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      question7: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      question8: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      question9: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      question10: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
    },
  ],
  tasks: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      taskTitle: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      dueDate: {
        type: Date,
        required: true,
      },
      assignee: [
        {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          username: {
            type: String,
          },
          email: {
            type: String,
          },
        },
      ],
      priority: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        default: "Open",
      },
      notified: {
        type: Boolean,
        default: false,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
