const nodemailer = require("nodemailer");

module.exports.sendEmail = async (event) => {
  const { to, subject, text } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "roy.gebrayel11@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending email" }),
    };
  }
};
