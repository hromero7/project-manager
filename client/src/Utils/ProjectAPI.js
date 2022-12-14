import axios from "axios";

export default {
    getProjects: (userId) => {
        return axios.get(`/api/project/user_projects/${userId}`)
        .then(res => {
            return res.data;
        })
    },
    getOneProject: (projectId) => {
        return axios.get(`/api/project/${projectId}`)
        .then(res => {
            return res.data;
        })
    },
    createProject: (projectTitle) => {
        return axios.post(`/api/project/create/`, { 
            title: projectTitle
        })
        .then(res => {
            return res.data;
        });
    },
    deleteProject: (projectId, userId) => {
        return axios.delete(`/api/project/delete/`, {
            params: {
                project_id: projectId,
                user: userId
            }
        })
        .then(res => {
            return res.data;
        });
    },
    addMember: () => {

    }
}