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
  members: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
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
          }
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
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
