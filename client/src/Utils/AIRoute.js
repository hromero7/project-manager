import axios from "axios";

export default {
  sendQuestions: (questions) => {
    console.log(`questions: `, questions);
    return axios.post(`api/oai/sendQ`, { questions });
  },
};
