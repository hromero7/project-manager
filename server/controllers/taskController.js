const db = require("../models");

module.exports = {
    createTask: async (req, res) => {
        const project = await db.Project.findById(req.params.project_id);
        if (!project) return res.status(404).json({ message: { msgBody: "No Project Found", msgError: true }});
        else {
            let newTask = {
                taskTitle: req.body.taskTitle,
                startDate: req.body.startDate,
                dueDate: req.body.dueDate,
                priority: req.body.priority,
                userId: req.user.id
            }
            project.tasks.push(newTask);
            project.save((err) => {
                if (err) return res.status(500).json({ message: { msgBody: "Error has occured", msgError: true }});
                else return res.status(200).json({ message: { msgBody: "Task successfully created.", msgError: false }});
            });
        }
    },
    deleteTask: async (req, res) => {
        const project = await db.Project.findById(req.params.project_id);
        if (!project) return res.status(404).json({ message: { msgBody: "No Project Found", msgError: true }});
       
        //members can only delete tasks
        if (project.members.find((member) => req.user.username !== member.username)) {
            return res.status(401).json({ message: { msgBody: "Not Authorized", msgError: true }});
        }

        //filter out task that is being deleted
        const filteredTasks = project.tasks.find((task) => task._id.toString() !== req.params.task_id.toString());

        project.tasks = filteredTasks;

        project.save((err, project) => {
            if (err) return res.status(500).json({ message: { msgBody: "Error has occured", msgError: true }});
            else return res.status(200).json({project: project, message: { msgBody: "Task successfully created.", msgError: false }});
        })

    }
}