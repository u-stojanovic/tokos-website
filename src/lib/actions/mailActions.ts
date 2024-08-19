import nodemailer from "nodemailer";
import crypto from "crypto";

export function generateVerificationToken(email: string, phoneNum: string) {
  const randomToken = crypto.randomBytes(32).toString("hex");
  const encodedData = Buffer.from(JSON.stringify({ email, phoneNum })).toString(
    "base64",
  );
  return `${randomToken}.${encodedData}`;
}

export async function sendOrderVerificationEmail(email: string, token: string) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_URL_PROD
      : process.env.NEXT_PUBLIC_APP_URL_DEV;

  const verificationLink = `${baseUrl}/api/verify-order?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Potvrdite Vašu Narudžbinu",
    text: `Molimo Vas da potvrdite Vašu narudžbinu klikom na sledeći link: ${verificationLink}`,
  };

  await transporter.sendMail(mailOptions);
}
