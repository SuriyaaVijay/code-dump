import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { id: userId } = reqBody;

    const user = await User.findOne({ _id: userId });

    const email = user.email;

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await sendEmail({ email, emailType: "VERIFY", userId: user._id });

    return NextResponse.json({
      message: "Verification email sent successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
