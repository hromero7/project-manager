const nodemailer = require("nodemailer");
const cron = require("node-cron");
const axios = require("axios");
require("dotenv").config();
// const cronJob = () => {
//     cron.schedule("*/3 * * * * *", () => {
//     task();
// });
// }

const updateTask = async (projectId, taskId) => {
    const res = await axios.put(`http://localhost:3001/api/task/update_task/notify`, {
        projectId: projectId,
        taskId: taskId
    });
    console.log(res);
}

const task = async () => {
   const res = await axios.get("http://localhost:3001/api/task/find_all");
  
//    const filteredData = res.data.filter(data =>
//     data.tasks.dueDate <= "2023-01-26T23:11:55.775Z");
//     console.log(filteredData);

    res.data.map(data => {
        // updateTask(data._id, data.taskId);
        // console.log(data.taskId);
        if (data.assignee.length > 0) {
            data.assignee.forEach(user => {
                emailNotifications(user.email, data.taskTitle, user.username)
                //updateTask(data._id, data.taskId);
                //console.log(user.email);
            });
        } else {
            data.members.forEach(member => {
                emailNotifications(member.email, data.taskTitle, member.username)
                //updateTask(data._id, data.taskId);
                //console.log(member.email)
            })
        }
        
    })


 }

// async..await is not allowed in global scope, must use a wrapper
const emailNotifications = async (email, taskTitle, username) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    service: "yahoo",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "projectmanagerapp@yahoo.com", // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
    logger: true
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'projectmanagerapp@yahoo.com', // sender address
    to: email, // list of receivers
    subject: `[PM NOTIFICATION] - ${taskTitle}`, // Subject line
    text: `Hello ${username}, This is a reminder that your task is due soon.`, // plain text body
    html: `<b>Hello ${username}, This is a reminder that your task is due soon.</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// emailNotifications().catch(console.error);

module.exports = task;