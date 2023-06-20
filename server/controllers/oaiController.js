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
  sendQs: (req, res) => {
    console.log(`req.body: `, req.body);
  },
};
