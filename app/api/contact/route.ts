import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    await sendEmail({ name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer votre message. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
