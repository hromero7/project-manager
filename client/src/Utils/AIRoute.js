import axios from "axios";

export default {
  sendQuestions: (questions, props) => {
    console.log(`questions: `, questions);
    console.log(`props.projectId: `, props.projectId);
    return axios.post(`/api/oai/sendQs/`, {
      data: { questions: questions, projectId: props.projectId },
    });
  },
};
