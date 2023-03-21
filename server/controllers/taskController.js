const { getAllByDisplayValue } = require("@testing-library/react");
const db = require("../models");

module.exports = {
  createTask: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });
    else {
      let newTask = {
        taskTitle: req.body.taskTitle,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        userId: req.user.id,
      };
      project.tasks.push(newTask);
      project.save((err) => {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          return res.status(200).json({
            message: {
              msgBody: "Task successfully created.",
              msgError: false,
            },
          });
      });
    }
  },
  deleteTask: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });

    //members can only delete tasks
    const userExists = project.members.find(
      (member) => req.user.username === member.username
    );

    if (!userExists) {
      return res
        .status(401)
        .json({ message: { msgBody: "Not Authorized", msgError: true } });
    }

    //filter out task that is being deleted
    const filteredTasks = project.tasks.filter(
      (task) => task._id.toString() !== req.params.task_id.toString()
    );

    project.tasks = filteredTasks;

    project.save((err, project) => {
      if (err)
        return res
          .status(500)
          .json({ message: { msgBody: "Error has occured", msgError: true } });
      else
        return res.status(200).json({
          project: project,
          message: { msgBody: "Task successfully deleted.", msgError: false },
        });
    });
  },
  updateTask: async (req, res) => {
    const taskUpdate = await db.Project.findById({
      _id: req.params.project_id.toString(),
    });

    taskUpdate.tasks.forEach(
      (item) => {
        if (item._id.toString() === req.params.task_id) {
          item.dueDate = req.body.dueDate;
          item.priority = req.body.priority;
          item.startDate = req.body.startDate;
          item.taskTitle = req.body.taskTitle;
        }
      },

      taskUpdate.save(function (err) {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          return res.status(200).json({
            message: {
              msgBody: `Task updated!`,
              msgError: false,
            },
          });
      })
    );
  },
  updatePriority: async (req, res) => {
    const taskUpdate = await db.Project.findById({
      _id: req.params.project_id.toString(),
    });
    taskUpdate.tasks.forEach(
      (item) => {
        if (item._id.toString() === req.params.task_id) {
          item.priority = req.body.priority;
        }
      },
      taskUpdate.save(function (err) {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured: #TU1", msgError: true },
          });
        else
          return res.status(200).json({
            message: {
              msgBody: `Task priority updated!`,
              msgError: false,
            },
          });
      })
    );
  },
  addTaskAssignee: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });
    else {
      let userId = req.body.id;
      let username = req.body.username;
      let email = req.body.email;

      //find task

      const task = project.tasks.find(
        (task) => req.params.task_id.toString() === task._id.toString()
      );

      //check if user has already been added
      const userExists = task.assignee.find(
        (user) => user.id.toString() === userId.toString()
      );

      if (userExists)
        return res.status(500).json({
          message: {
            msgBody: `${username} has already been assigned to this task`,
          },
        });
      else {
        task.assignee.push({ id: userId, username: username, email: email });

        project.save((err) => {
          if (err)
            return res.status(500).json({
              message: { msgBody: "Error has occured", msgError: true },
            });
          else
            return res.status(200).json({
              status: 200,
              message: {
                msgBody: `${username} has been successfully added to ${task.taskTitle}.`,
                msgError: false,
              },
            });
        });
      }
    }
  },
  removeTaskAssignee: async (req, res) => {
    const project = await db.Project.findById(req.params.project_id);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });
    else {
      //find task

      const task = project.tasks.find(
        (task) => req.params.task_id.toString() === task._id.toString()
      );

      //filter out assignee
      const filteredAssignee = task.assignee.filter(
        (user) => user.id.toString() !== req.params.user_id.toString()
      );

      task.assignee = filteredAssignee;

      project.save((err) => {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          return res.status(200).json({
            status: 200,
            message: {
              msgBody: `User has been successfully removed from ${task.taskTitle}.`,
              msgError: false,
            },
          });
      });
    }
  },
  findDueTasks: async (req, res) => {
    let startDate = new Date();
    let endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1);

    const projects = await db.Project.aggregate([
      { $unwind: "$tasks" },
      {
        $addFields: {
          taskId: "$tasks._id",
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ["$tasks", "$$ROOT"],
          },
        },
      },
      {
        $match: {
          dueDate: {
            $gte: new Date("2023-01-20T22:36:53.976Z"),
            $lte: new Date("2023-01-31T23:36:53.976Z"),
          },
          notified: false,
        },
      },
      {
        $project: {
          tasks: 0,
        },
      },
    ]);

    res.json(projects);
    // console.log(projects);
    //return projects;
  },
  updateNotified: async (req, res) => {
    const project = await db.Project.findById(req.body.projectId);
    if (!project)
      return res
        .status(404)
        .json({ message: { msgBody: "No Project Found", msgError: true } });
    else {
      //find task

      const task = project.tasks.find(
        (task) => req.body.taskId.toString() === task._id.toString()
      );

      // update notified field
      task.notified = true;

      project.save((err) => {
        if (err)
          return res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          return res.status(200).json({
            message: {
              msgBody: `${task.taskTitle} has been updated.`,
              msgError: false,
            },
          });
      });
    }
  },
};
