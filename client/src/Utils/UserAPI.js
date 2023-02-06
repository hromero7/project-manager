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
};
