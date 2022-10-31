const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  alertMessage: { type: String },
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
