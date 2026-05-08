import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    console.log('API route hit!'); // Add this

    try {
        const body = await request.json();
        console.log('Form data received:', body); // Add this

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'difabulous13@gmail.com',
            replyTo: body.email,
            subject: `New Commission Request from ${body.name}`,
            html: `
        <h2>New Commission Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Budget:</strong> ${body.budget}</p>
        <p><strong>Event Date:</strong> ${body.date}</p>
        <p><strong>Vision:</strong></p>
        <p>${body.vision.replace(/\n/g, '<br>')}</p>
      `
        });

        console.log('Resend response:', { data, error }); // Add this

        if (error) {
            console.error('Resend error:', error); // Add this
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}