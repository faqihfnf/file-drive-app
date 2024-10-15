import { EmailTemplate } from "./../../_components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function GET() {
//   return NextResponse.json({ message: "GET request received" });
// }

export async function POST(req) {
  const response = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Testing@resend.dev",
      to: [response.emailToSend],
      subject: response?.userName + " shared a file with you",
      react: EmailTemplate({ response }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
