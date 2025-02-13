'use server';

import React from 'react';
import { Resend } from "resend";
import WaitinglistEmail from "@/email/WaitinglistEmail";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
    throw new Error("RESEND_API_KEY is not defined in the environment");
}
const resend = new Resend(apiKey);

export default async function sendEmail(formData: FormData) {
    // Your email sending logic here
    const receiverEmail = formData.get('receiverEmail') as string;
    
    try {
        // Dynamically import renderToString to work around Next.js restrictions
        const { renderToString } = await import('react-dom/server');
        const emailHtml = renderToString(<WaitinglistEmail />);

        // Send the email
        await resend.emails.send({
            from: 'Winea <contact@winea.app>',
            to: receiverEmail, // Use the email from the form
            subject: 'Bienvenue sur Winea',
            react: emailHtml
        });
        
        // send a copy to your contact email
        await resend.emails.send({
            from: 'Winea <contact@winea.app>',
            to: 'contact@winea.app',
            subject: 'Nouvelle inscription à la liste d\'attente',
            text: `Nouveau membre inscrit: ${receiverEmail}`
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}