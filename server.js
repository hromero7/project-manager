require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./server/routes/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const notifications = require("./notifications");

app.use(cookieParser());
// the __dirname is the current directory from where the script is running
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.use(routes);

//Connect to MongoDB Atlas

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@${process.env.DB_URL}?retryWrites=true&w=majority`,
    {
      // autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Loaded on: localhost:" + PORT))
  .catch((err) => console.log(err));

//renders home page
app.get("/*", cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

// sends email notifications for tasks
// notifications();

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
