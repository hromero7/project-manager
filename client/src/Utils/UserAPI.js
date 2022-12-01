import axios from "axios";

export default {
  login: (user) => {
    return axios
      .post(`/api/user/login`, {
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
        if (res.status === 500) {
          console.log("res: ", res);
          console.log("500 error");
          return {
            isAuthenticated: false,
            user: { username: "" },
            message: "Something went wrong",
          };
        }
      })
      .catch((err) => {
        console.log("err", err);
        if (err.response.status === 401) {
          return {
            isAuthenticated: false,
            user: { username: "" },
            message: "Invalid username or password",
          };
        }
        if (err.response.status === 500) {
          console.log("res: ", err);
          console.log("500 error");
          return {
            isAuthenticated: false,
            user: { username: "" },
            message: "Something went wrong",
          };
        }
      });
  },
  register: (user) => {
    return axios
      .post(`/api/user/register`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        console.log("res.status", res.status);
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
    return axios.get(`/api/user/authenticated`).then((res) => {
      if (res.status !== 401) return res.data;
      else return { isAuthenticated: false, user: { username: "" } };
    });
  },
};
