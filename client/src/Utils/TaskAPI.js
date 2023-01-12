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
    }
}