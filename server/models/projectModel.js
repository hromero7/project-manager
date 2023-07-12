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
      productName: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      productDescription: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      uniqueFeatures: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      productChallenges: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      brandPersonality: {
        type: String,
        maxLength: 200,
        trim: true,
        required: true,
      },
      productVision: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      productResearch: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      callToAction: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      distrobutionChannels: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true,
      },
      competitors: {
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
