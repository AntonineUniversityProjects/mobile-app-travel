const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // or your email provider
  auth: {
    user: "roy.gebrayel10@gmail.com",
    pass: "qyav bdmf uvqc kgem",
  },
});

module.exports = async function (context, req) {
  try {
    const mailOptions = {
      from: "roy.gebrayel11@gmail.com",
      to: "roy.gebrayel10@gmail.com",
      subject: "Test Email",
      text: "This is a test email from Azure Functions.",
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    context.res = {
      status: 200,
      body: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    context.res = {
      status: 500,
      body: "Error sending email",
    };
  }
};
