// src/app/api/contact/route.js

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, date, message, pageTitle, pageUrl } = body;

  const saveErrorToFile = (errorMessage) => {
    try {
      const filePath = path.join(process.cwd(), 'error-log.txt');
      const log = `${new Date().toISOString()} - Error: ${errorMessage}\n`;
      fs.appendFileSync(filePath, log);
    } catch (err) {
      console.error('Failed to write to log file:', err.message);
    }
  };

  if (!name || !email || !phone || !message || !date) {
    const error = 'All fields (name, email, phone, date, message) are required';
    saveErrorToFile(error);
    return NextResponse.json({ error }, { status: 400 });
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    const error = 'Invalid email format';
    saveErrorToFile(error);
    return NextResponse.json({ error }, { status: 400 });
  }

  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    const error = 'Invalid phone number';
    saveErrorToFile(error);
    return NextResponse.json({ error }, { status: 400 });
  }

  // Save to log
//   try {
//     const filePath = path.join(process.cwd(), 'submissions-log.txt');
//     const log = `
// ${new Date().toISOString()} - Form submitted:
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Date: ${date}
// Message: ${message}
// Page Title: ${pageTitle || 'N/A'}
// Page URL: ${pageUrl || 'N/A'}
// -----------------------------\n`;
//     fs.appendFileSync(filePath, log);
//   } catch (err) {
//     console.error('Failed to log submission:', err.message);
//   }

  // Send email using nodemailer
  try {
   const transporter = nodemailer.createTransport({
  host: 'mail.seooffpages.com',
  port: 465,                // Secure SMTP port
  secure: true,             // MUST be true for port 465
  auth: {
    user: 'test@seooffpages.com',     // Your full email address
    pass: 'Project@Pass!2023*'        // Your email password
  }
});

const mailOptions = {
  from: '"Tempo Traveller Hire India" <test@seooffpages.com>',
  to: 'delhirentcar@gmail.com, info@seooffpages.com',
  subject: `New Enquiry Form Submission from ${name || 'Unknown'}`,
  html: `
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name || 'N/A'}</p>
    <p><strong>Email:</strong> ${email || 'N/A'}</p>
    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    <p><strong>Date:</strong> ${date || 'N/A'}</p>
    <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
    <p><strong>Page Title:</strong> ${pageTitle || 'N/A'}</p>
    <p><strong>Page URL:</strong> ${pageUrl || 'N/A'}</p>
  `,
};


    await transporter.sendMail(mailOptions);
 } catch (error) {
  saveErrorToFile(`Email send error: ${error.message}`);
  return NextResponse.json({ error: 'Failed ' }, { status: 500 });
}

return NextResponse.json({ message: 'Successfully Submited' }, { status: 200 });

}
