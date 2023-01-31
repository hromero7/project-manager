import axios from "axios";

export default {
  createTask: (projectId, taskValues) => {
    return axios
      .post(`/api/task/create/${projectId}`, {
        taskTitle: taskValues.taskTitle,
        startDate: taskValues.startTime,
        dueDate: taskValues.endTime,
        priority: taskValues.priority,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  deleteTask: (projectId, taskId, taskDeleteValues) => {
    console.log(`taskDeleteValues: `, taskDeleteValues);
    return axios
      .delete(`/api/task/delete/${projectId}/${taskId}`, {
        userId: taskDeleteValues.userId,
        taskId: taskDeleteValues.taskId,
        projectId: taskDeleteValues.projectId,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  addAssignee: (projectId, taskId, user) => {
    return axios
      .put(`/api/task/add_assignee/${projectId}/${taskId}`, {
        id: user.id,
        username: user.username,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  removeAssignee: (projectId, taskId, userId) => {
    return axios
      .put(`/api/task/remove_assignee/${projectId}/${taskId}/${userId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
};
