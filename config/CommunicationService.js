const axios = require("axios");

export const sendEmail = async () => {
  const connectionString =
    "endpoint=https://communication-service-travel.unitedstates.communication.azure.com/;accesskey=/JeSI/vZcIyD5KaatpidcgRsE7/E7vzL2b46jAZgg8RrPknDRUS/mYQUpLLMc3Ge1yNQZ/Jt+S4xhNDGRPUJsQ==";
  const endpoint =
    "https://communication-service-travel.unitedstates.communication.azure.com/";

  const emailRequest = {
    from: "roy.gebrayel11@gmail.com",
    to: ["recipient@example.com"],
    subject: "Booking apointment",
    body: " // this is a generated emaill /",
  };

  try {
    const response = await axios.post(
      `${endpoint}/communication/sendemail`,
      emailRequest,
      {
        headers: {
          Authorization: `Bearer ${connectionString}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};


