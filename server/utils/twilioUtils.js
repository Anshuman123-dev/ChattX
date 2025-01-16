import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Twilio Auth Token
const serviceSid = process.env.TWILIO_SERVICE_SID; // Your Twilio Verify Service SID

const client = twilio(accountSid, authToken);

export const sendVerificationCode = async (phoneNumber) => {
  try {
    const response = await client.verify.v2
      .services(serviceSid)
      .verifications.create({
        to: phoneNumber,
        channel: "sms", // Or "call" if you'd prefer
      });
    return response;
  } catch (error) {
    throw new Error("Failed to send verification code: " + error.message);
  }
};

export const verifyCode = async (phoneNumber, code) => {
  try {
    const response = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({
        to: phoneNumber,
        code,
      });
    return response;
  } catch (error) {
    throw new Error("Failed to verify code: " + error.message);
  }
};
