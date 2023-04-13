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
    return axios
      .put(`/api/project/update/${project_id}`, { title: title })
      .then((res) => {
        return res.data;
      });
  },
  getAssignedProjects: (username) => {
    return axios
      .get(`/api/project/assigned_projects/${username}`)
      .then((res) => {
        return res.data;
      });
  },
  findMember: (userQuery) => {
    return axios.get(`/api/user/finduser/${userQuery}`).then((res) => {
      return res.data;
    });
  },
  addMember: (project_id, item) => {
    return axios
      .put(`/api/project/add_member/${project_id}`, {
        username: item.username,
        userId: item._id,
        email: item.email,
      })
      .then((res) => {
        return res.data;
      });
  },
  removeMembers: (project_id, member) => {
    return axios
      .delete(`/api/project/delete_member/${project_id}`, {
        data: {
          userId: member.id,
          username: member.username,
          docId: member._id,
          projectId: project_id,
          email: member.email,
        },
      })
      .then((res) => {
        return res;
      });
  },
  // promoteMember: () => {
  //   return axios.put(`/api/project/promote_member/${}`,{
  //     data: ""
  //   }).then((res) => {
  //     return res;
  //   })
  // },
  // demoteMember: () => {
  //   return axios.put(`/api/project/demote_member/${}`,{
  //     data: ""
  //   }).then((res) => {
  //     return res;
  //   })
  // }
};
