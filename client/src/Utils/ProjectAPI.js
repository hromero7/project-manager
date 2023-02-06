import axios from "axios";

export default {
  getProjects: (userId) => {
    return axios.get(`/api/project/user_projects/${userId}`).then((res) => {
      return res.data;
    });
  },
  getOneProject: (projectId) => {
    return axios.get(`/api/project/${projectId}`).then((res) => {
      return res.data;
    });
  },
  createProject: (projectTitle) => {
    return axios
      .post(`/api/project/create/`, {
        title: projectTitle,
      })
      .then((res) => {
        return res.data;
      });
  },
  deleteProject: (projectId, userId) => {
    return axios
      .delete(`/api/project/delete/`, {
        params: {
          project_id: projectId,
          user: userId,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  updateProjTitle: (project_id, title) => {
    console.log(`project_id: `, project_id);
    console.log(`title: `, title);
    return axios.put(`/api/project/update/${project_id}`, { title: title });
  },
  addMember: () => {},
};
