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
          brandName: req.body.questions.brandName,
          brandWebsite: req.body.questions.brandWebsite,
          brandSocials: req.body.questions.brandSocials,
          brandDescription: req.body.questions.brandDescription,
          targetAudience: req.body.questions.targetAudience,
          shortTerm: req.body.questions.shortTerm,
          longTerm: req.body.questions.longTerm,
          credibility: req.body.questions.credibility,
          brandVoice: req.body.questions.brandVoice,
          excludeTerms: req.body.questions.excludeTerms,
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
