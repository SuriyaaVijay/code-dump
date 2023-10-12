import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // hash token
    const token = await bcryptjs.hash(userId.toString(), 10);
    const cleanToken = token.replace(/[\/\.\$\#]/g, "");

    if (emailType === "VERIFY") {
      await User.findOneAndUpdate(userId, {
        verifyToken: cleanToken,
        verifyTokenExpiry: Date.now() + 320000,
      });
    } else if (emailType === "RESET") {
      await User.findOneAndUpdate(userId, {
        forgotPasswordToken: cleanToken,
        forgotPasswordExpiry: Date.now() + 320000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: "example@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/${
        emailType === "VERIFY" ? "verifyemail" : "forgotpassword/1"
      }?token=${cleanToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
        or copy and paste the link below in your browser. <br> ${
          process.env.DOMAIN
        }/${
        emailType === "VERIFY" ? "verifyemail" : "forgotpassword/1"
      }?token=${cleanToken}
        </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
