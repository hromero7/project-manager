const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  findAll: (req, res) => {
    db.Project.find({}, function (err, docs) {
      if (err)
        return res
          .status(500)
          .json({ message: { msgBody: "Error has occured", msgError: true } });
      else return res.status(200).json(docs);
    });
  },
  findAllLeaderProjects: (req, res) => {
    db.Project.find({ userId: req.params.userId })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => {
        console.log(err);
      });
  },
  findOne: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "Project Not Found", msgError: true } });
    else return res.status(200).json(project);
  },
  navToProject: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "Project Not Found", msgError: true } });
    else return res.status(200).json(project);
  },
  createProject: async (req, res) => {
    // console.log(req.body);
    let { title } = req.body;
    const user = await db.User.findById(req.user.id);

    if (!user)
      return res
        .status(404)
        .json({ message: { msgBody: "User not found", msgError: true } });
    else {
      let newProject = new db.Project({
        title,
        userId: user.id,
        members: { id: user.id, username: user.username, email: user.email },
      });

      newProject.save((err, project) => {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          return res.status(200).json({
            message: {
              msgBody: "Project successfully created.",
              msgError: false,
            },
          });
      });
    }
  },
  findByUser: async (req, res) => {
    const projects = await db.Project.find({ userId: req.params.user_id });
    if (!projects)
      return res
        .status(404)
        .json({ message: { msgBody: "No Projects Found", msgError: true } });
    else
      return res.status(200).json({ projects: projects, authenticated: true });
  },
  deleteProject: async (req, res) => {
    const project = await db.Project.findById(req.query.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });
    if (project.userId.toString() !== req.query.user) {
      return res
        .status(401)
        .json({ message: { msgBody: "Not Authorized", msgError: true } });
    } else {
      project.remove((err) => {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          return res.status(200).json({
            message: {
              msgBody: "Project successfully deleted",
              msgError: false,
            },
          });
      });
    }
  },
  addMember: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });
    else {
      const checkIfExists = await db.Project.find(
        {
          _id: req.params.project_id,
        },
        { members: { $elemMatch: { id: req.body.userId } } }
      );
      if (checkIfExists[0].members.length === 1) {
        return res.status(400).json({
          message: {
            msgBody: "User exists in this area already",
            msgError: true,
          },
        });
      } else if (checkIfExists[0].members.length === 0) {
        let userId = req.body.userId;
        let username = req.body.username;
        let email = req.body.email;

        project.members.push({ id: userId, username: username, email: email });
        project.save((err) => {
          if (err)
            return res.status(500).json({
              message: { msgBody: "Error has occured", msgError: true },
            });
          else
            return res.status(200).json({
              message: {
                msgBody: `${username} has been successfully added to ${project.title}.`,
                msgError: false,
              },
              status: 200,
            });
        });
      }
    }
  },
  deleteMember: async (req, res) => {
    const remFromTask = await db.Project.findOneAndUpdate(
      {
        _id: req.params.project_id,
      },
      {
        $pull: {
          "tasks.$[].assignee": { username: req.body.username },
          members: { id: req.body.userId },
          promotion: { userId: req.body.userId },
        },
      },
      { new: true }
    );

    if (!remFromTask) {
      return res.status(404).json({
        message: {
          msgBody: "Error deleting member from member list",
          msgError: true,
        },
      });
    } else {
      return res.status(200).json({
        message: {
          msgBody: "Member successfully deleted",
          msgError: false,
        },
      });
    }
  },
  updateProjectTitle: async (req, res) => {
    if (
      req.body.title.length <= 4 ||
      req.body.title === undefined ||
      req.body === undefined
    ) {
      return res.status(200).json({
        message: {
          msgBody: "Project title must be 5 characters or more",
          msgError: true,
        },
      });
    } else {
      const projectTitleUpdate = await db.Project.findById({
        _id: req.params.project_id.toString(),
      });
      projectTitleUpdate.title = req.body.title;
      projectTitleUpdate.save(function (err) {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          return res.status(200).json({
            message: {
              msgBody: `Project title updated to: ${req.body.title}`,
              msgError: false,
            },
          });
      });
    }
  },
  findAssignedProjects: async (req, res) => {
    const username = req.user.username;
    const projects = await db.Project.aggregate([
      {
        $match: {
          $and: [{ "members.username": username }],
        },
      },
    ]);

    if (!projects)
      return res
        .status(404)
        .json({ message: { msgBody: "No Projects Found", msgError: true } });
    else
      return res.status(200).json({
        body: projects,
        message: { msgBody: "Projects found", status: 200, msgError: false },
      });
  },
  promoteMember: async (req, res) => {
    const project = await db.Project.findById({
      _id: req.body.data.projectId.toString(),
    });
    if (!project) {
      return res
        .status(404)
        .json({ message: { msgBody: "No project found", msgError: true } });
    } else {
      project.promotion.push({
        userId: req.body.data.userId.toString(),
        email: req.body.data.email,
        username: req.body.data.username,
        projectId: req.body.data.projectId.toString(),
      });

      project.save((err) => {
        if (err) {
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        } else {
          return res.status(200).json({
            status: 200,
            message: {
              msgBody: `${req.body.data.username} has been successfully added.`,
              msgError: false,
            },
          });
        }
      });
    }
  },
  demoteMember: async (req, res) => {
    const demoMember = await db.Project.findOneAndUpdate(
      {
        _id: req.body.data.projectId,
      },
      {
        $pull: {
          promotion: { userId: req.body.data.userId.toString() },
        },
      }
    );

    if (!demoMember) {
      return res.status(404).json({
        message: {
          msgBody: "Error deleting member from member list",
          msgError: true,
        },
      });
    } else {
      return res.status(200).json({
        message: {
          msgBody: "Member successfully deleted",
          msgError: false,
        },
      });
    }
  },
  projectProgress: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });
    else if (project.tasks.length === 0) {
      return res.status(200).json(0);
    } else {
      const completedTasks = project.tasks.filter(
        (task) => task.status == "Completed"
      );
      const progress = Math.round(
        (completedTasks.length / project.tasks.length) * 100
      );
      return res.status(200).json(progress);
    }
  },
};
