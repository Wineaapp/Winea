"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function submitWaitlist(formData : FormData) {
    try {
        const waitlistEntry = await prisma.waitlist.create({
            data: {
                nom: formData.get('nom') as string,
                prenom: formData.get('prenom') as string,
                email: formData.get('email') as string,
                numero: formData.get('numero') as string,
                entenduparlezdenous: formData.get('references') as string,
                fonctionalitesouhaitees: formData.get('fonctionnalites') as string,
            }
        })

        return {success: true, waitlistEntry};
    } catch (error) {
        console.error('Error submitting waitlist:', error);
        throw new Error('Failed to submit waitlist');
    }
}