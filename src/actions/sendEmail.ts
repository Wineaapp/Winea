'use server';
import React from 'react';
import { Resend } from "resend";
import WaitinglistEmail from "@/email/WaitinglistEmail";
import { renderToString } from 'react-dom/server';
/* import { renderAsync } from '@react-email/render';
 */
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
    // Your email sending logic here
    const receiverEmail = formData.get('receiverEmail') as string;
    
    try {
        // Render the email template to HTML
        const html = renderToString(React.createElement(WaitinglistEmail));

        // Send the email
        await resend.emails.send({
            from: 'Winea <contact@winea.app>',
            to: receiverEmail, // Use the email from the form
            subject: 'Bienvenue sur Winea',
            html: html
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