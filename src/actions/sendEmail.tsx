'use server';

import React from 'react';
import { Resend } from "resend";
import WaitinglistEmail from "@/email/WaitinglistEmail";

const resend = new Resend("re_QUNidFSs_C5dL3RDo1znEe22h9PMuhfkp");

export default async function sendEmail(formData: FormData) {
    // Your email sending logic here
    const receiverEmail = formData.get('receiverEmail') as string;
    
    try {
        // Dynamically import renderToString to work around Next.js restrictions
        /* const { renderToString } = await import('react-dom/server');
        const emailHtml = renderToString(<WaitinglistEmail />); */

        // Send the email
        await resend.emails.send({
            from: 'Winea <contact@winea.app>',
            to: receiverEmail, // Use the email from the form
            subject: 'Bienvenue sur Winea',
            react: <WaitinglistEmail />
        });
        
        // sending a copy to your contact email
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