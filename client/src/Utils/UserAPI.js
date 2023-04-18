import axios from "axios";

export default {
  login: (user) => {
    return axios
      .post(`/api/user/login/`, {
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          return (
            err.data,
            {
              isAuthenticated: false,
              user: { username: "" },
              message: "Invalid username or password",
            }
          );
        }
        if (err.response.status === 500) {
          return (
            err.data,
            {
              isAuthenticated: false,
              user: { username: "" },
              message: "Whoops. Invalid username or password.",
            }
          );
        }
      });
  },
  register: (user) => {
    return axios
      .post(`/api/user/register/`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        if (res.status === 200) {
          return res;
        }
      })
      .catch((err) => {
        return err.response;
      });
  },
  logout: () => {
    return axios.get(`/api/user/logout`).then((res) => {
      return res.data;
    });
  },
  isAuthenticated: () => {
    return axios
      .get(`/api/user/authenticated/`)
      .then((res) => {
        if (res.status !== 401) return res.data;
      })
      .catch((err) => {
        return { isAuthenticated: false, user: { username: "" } };
      });
  },
  editProfile: (data, _id) => {
    return axios
      .put(`/api/user/edit/${_id}`, { data, _id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  },
  passwordChange: (_id, oldPassword, newPassword, newConfirm) => {
    console.log(`old / new / newcon: `, oldPassword, newPassword, newConfirm);
    return axios
      .get(`/api/user/find/${_id}`)
      .then((res) => {
        axios
          .post(`/api/user/passwordUpdate/`, {
            _id: _id,
            oldPassword: oldPassword,
            newPassword: newPassword,
            newConfirm: newConfirm,
          })
          .then((res) => {
            console.log(`res: `, res);
          })
          .catch((err) => {
            console.log(`failed to obtain auth info: `, err);
          });
        // return res;
      })
      .catch((err) => {
        return err;
      });
  },
};
