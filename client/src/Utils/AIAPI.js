import axios from "axios";

export default {
  sendQuestions: (questions, props) => {
    return axios
      .post(`/api/oai/sendQs/`, {
        data: { questions: questions, projectId: props.projectId },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return console.log(`err:`, err);
      });
  },
  chatAPIRequest: () => {
    return axios
      .post(`/api/oai/completions`, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return console.log(err);
      });
  },
};
