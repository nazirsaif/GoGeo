import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      startDate, startTime, pickupAddress, destination, 
      additionalDetails, passengers, isRoundTrip, 
      name, surname, emailAddress, phoneNumber 
    } = data;

    // Email to Admin (You)
    const adminEmail = await resend.emails.send({
      from: 'GoGeo Buses <info@gogeobuses.com>', 
      to: 'info@gogeobuses.com', 
      subject: `New Quote Request from ${name} ${surname}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Pickup:</strong> ${pickupAddress}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date & Time:</strong> ${startDate} at ${startTime}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Round Trip:</strong> ${isRoundTrip ? 'Yes' : 'No'}</p>
        <p><strong>Additional Details:</strong> ${additionalDetails || 'None'}</p>
      `,
    });

    // Auto-reply to Client
    const clientEmail = await resend.emails.send({
      from: 'GoGeo Buses <info@gogeobuses.com>', 
      to: emailAddress,
      subject: `We received your quote request, ${name}!`,
      html: `
        <h2>Thank you for your request, ${name}!</h2>
        <p>We have successfully received your request for a trip to <strong>${destination}</strong>.</p>
        <p>Our team is currently calculating your quote based on your requirements and will get back to you within 24 hours.</p>
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
