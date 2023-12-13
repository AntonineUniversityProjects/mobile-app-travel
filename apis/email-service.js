// api/sendEmail.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { to, subject, text } = req.body;

  try {
    const response = await axios.post(
      "https://api.mailgun.net/v3/sandboxd5e18814a2e14992a60414ac03f5cd48.mailgun.org/messages",
      {
        from: "roy.gebrayel11@gmail.com",
        to,
        subject,
        text,
      },
      {
        auth: {
          username: "api",
          password: "47dbce86b662593c541ed7e7dc174a98-07f37fca-784b1064",
        },
      }
    );

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
