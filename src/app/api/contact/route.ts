import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, emailAddress, message } = data;

    // Email to Admin (You)
    const adminEmail = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Update this to your verified domain later (e.g. contact@gogeobuses.com)
      to: emailAddress, // Sending to the client's email for testing. In production, change this to your email (e.g., info@gogeobuses.com)
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto-reply to Client
    const clientEmail = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Update to your domain later
      to: emailAddress,
      subject: `We received your message, ${name}!`,
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We have successfully received your message and our team will get back to you shortly.</p>
        <br/>
        <p>Best regards,</p>
        <p>The GoGeo Buses Team</p>
      `,
    });

    return NextResponse.json({ success: true, adminEmail, clientEmail });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
