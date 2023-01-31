const db = require("../models");

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
        members: { id: user.id, username: user.username },
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
        project.members.push({ id: userId, username: username });
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
};
