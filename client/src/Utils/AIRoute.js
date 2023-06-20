import axios from "axios";

export default {
  sendQuestions: (questions) => {
    return axios.post(`api/oai/sendQ`, {});
  },
};
