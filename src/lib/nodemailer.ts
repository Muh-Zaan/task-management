import nodemailer from "nodemailer";

export const sendEmail = async ({ to, id }: { to: string; id: string }) => {
  const { EMAIL_USER, EMAIL_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: EMAIL_USER,
      to,
      subject: "Recover Passeword",
      html: `<a href="http://localhost:3000/recover-password/${id}">http://localhost:3000/recover-password/${id}</a>`,
    });
  } catch (error) {
    console.log(error);
  }
};
