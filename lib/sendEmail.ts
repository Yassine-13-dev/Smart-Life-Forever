import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing.");
  }

  return new Resend(apiKey);
}

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const resend = getResend();

  return resend.emails.send({
    from: "Smart Life Forever <no-reply@smart-life-forever.cm>",
    to: "boningkange@gmail.com",
    subject: `Formulaire de contact – ${subject}`,
    text: `Nouveau message de ${name} <${email}>:\n\n${message}`,
    html: `
      <div style="font-family:system-ui, sans-serif; line-height:1.5; color:#0f172a;">
        <h2>Nouveau message de ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });
}
