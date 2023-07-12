const db = require("../models");

module.exports = {
  findAllOAI: (req, res) => {
    db.Project.find({}, function (err, docs) {
      if (err)
        return res
          .status(500)
          .json({ message: { msgBody: "Error has occured", msgError: true } });
      else return res.status(200).json(docs);
    });
  },
  sendQs: async (req, res) => {
    console.log(`req.body: `, req.body);
    const project = await db.Project.findById(req.body.projectId);
    if (!project) {
      return res
        .status(404)
        .json({ message: { msgBody: "No ProjectFound", msgError: true } });
    } else {
      const checkIfExists = await db.Project.find(
        {
          _id: req.body.projectId,
        },
        {
          questions: { $elemMatch: { projectId: req.body.projectId } },
        }
      );
      if (checkIfExists[0].questions.length === 1) {
        return res.status(422).json({
          message: {
            msgBody: "Values exists in this area already",
            msgError: true,
            errNum: 422,
          },
        });
      } else if (checkIfExists[0].questions.length === 0) {
        let newQuestions = {
          projectId: req.body.projectId.toString(),
          question1: req.body.questions.question1,
          question2: req.body.questions.question2,
          question3: req.body.questions.question3,
          question4: req.body.questions.question4,
          question5: req.body.questions.question5,
          question6: req.body.questions.question6,
          question7: req.body.questions.question7,
          question8: req.body.questions.question8,
          question9: req.body.questions.question9,
          question10: req.body.questions.question10,
        };

        project.questions.push(newQuestions);
        project.save((err) => {
          if (err)
            return res.status(422).json({
              message: {
                msgBody: "Values exist in this area already",
                msgError: true,
                errNum: 422,
              },
            });
          else
            return res.status(200).json({
              message: {
                msgBody: "Response saved.",
                msgError: false,
                payload: project,
              },
            });
        });
      }
    }
  },
  chatGPTRequest: async (req, res) => {},
};
