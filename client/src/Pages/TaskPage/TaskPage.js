import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import { AuthContext } from "../../Context/AuthContext";
import TaskModal from "../../Components/TaskModal/TaskModal";
import TaskActionMenu from "../../Components/TaskActionMenu/TaskActionMenu";
import "./TaskPage.css";
import TaskAssignee from "../../Components/TaskAssignee/TaskAssignee";

const TaskPage = () => {
    const { ID } = useParams();
    const [projectData, setProjectData] = useState({
        date: "",
        members: [],
        tasks: [],
        title: "",
        userId: "",
        id: ""
    });

    useEffect(() => {
        getProjData();
      }, []);


    const getProjData = () => {
        ProjectAPI.getOneProject(ID).then((response) => {
            console.log("line 27", response)
            setProjectData({
            date: response.date,
            members: response.members,
            tasks: response.tasks,
            title: response.title,
            userId: response.userId,
            id: response._id
            });
        });
    };
    return (
    <div className="task-container">
        <h1 style={{"color": "black"}}>{projectData.title}</h1>
        <TaskModal projectId={ID} getProjData={getProjData}/>
        <Table striped hover responsive>
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Due date</th>
            <th>Priority</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {projectData.tasks.map((task, i) => {
                return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{task.taskTitle}</td>
                        <td>{task.status}</td>
                        <td>{task.assignee.map(assignee => {
                            return (
                                <div>{assignee.username}</div>
                            )
                        })}
                            <TaskAssignee projectId={projectData.id} taskId={task._id} assignee={task.assignee} getProjectData={getProjData}/>
                        </td>
                        <td>{task.dueDate}</td>
                        <td>
                            <span className={`task-priority ${task.priority === "High"? "priority-high" : 
                                task.priority === "Medium"? "priority-medium" : 
                                "priority-low"}`}>
                                    {task.priority}
                            </span>
                        </td>
                        <td>
                            <TaskActionMenu projectId={projectData.id} taskId={task._id} getProjectData={getProjData}/>
                        </td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
    </div>
    )
}

export default TaskPage;
