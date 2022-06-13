const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    port: 25,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  let info = await transporter.sendMail({
    from: '" Sanji " <sanji.blockchain@gmail.com>', // sender address
    to: "ksanjay99kumar@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Sending email with nodejs?</b>", // html body
  });

  console.log(info);
  res.send(info);
};


module.exports = sendEmail;
