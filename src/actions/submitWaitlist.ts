"use server";

import { PrismaClient } from "@prisma/client";
import sendEmail from "./sendEmail";

// Create a single PrismaClient instance and reuse it
const prisma = new PrismaClient();

export default async function submitWaitlist(formData: FormData) {
  if (!formData) {
    throw new Error("Form data is required");
  }

  try {
    // Debug log
    console.log("Received form data:", Object.fromEntries(formData.entries()));

    // Validate required fields
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const numero = formData.get("numero");
    const references = formData.get("references");
    const fonctionnalites = formData.get("fonctionnalites");

    // Type check and validation
    if (
      !nom ||
      typeof nom !== "string" ||
      !prenom ||
      typeof prenom !== "string" ||
      !email ||
      typeof email !== "string" ||
      !numero ||
      typeof numero !== "string" ||
      !references ||
      typeof references !== "string" ||
      !fonctionnalites ||
      typeof fonctionnalites !== "string"
    ) {
      throw new Error("Invalid or missing fields in form data");
    }

    // Check if email already exists
    const existingUser = await prisma.waitlist.findUnique({
      where: { email },
    });

    let waitlistEntry;

    if (existingUser) {
      // User already exists, update their information instead
      waitlistEntry = await prisma.waitlist.update({
        where: { email },
        data: {
          nom,
          prenom,
          numero,
          entenduparlezdenous: references,
          fonctionalitesouhaitees: fonctionnalites,
          updatedAt: new Date(), // Assuming you have this field, add it if not
        },
      });
      console.log("Existing user updated:", JSON.stringify(waitlistEntry));
    } else {
      // Create new waitlist entry
      waitlistEntry = await prisma.waitlist.create({
        data: {
          nom,
          prenom,
          email,
          numero,
          entenduparlezdenous: references,
          fonctionalitesouhaitees: fonctionnalites,
        },
      });
      console.log("New waitlist entry created:", JSON.stringify(waitlistEntry));
    }

    try {
      // Send welcome email
      const emailFormData = new FormData();
      emailFormData.set("receiverEmail", email);
      await sendEmail(emailFormData);
      console.log("Welcome email sent successfully");
    } catch (emailError) {
      console.error(
        "Error sending welcome email:",
        emailError instanceof Error ? emailError.message : String(emailError)
      );
      // Continue execution even if email fails
    }

    return { success: true, waitlistEntry };
  } catch (error) {
    // Simplified error logging to avoid Node.js internal errors
    console.error(
      "Error submitting waitlist:",
      error instanceof Error ? error.message : String(error)
    );

    throw new Error(
      error instanceof Error ? error.message : "Failed to submit waitlist"
    );
  } finally {
    await prisma.$disconnect();
  }
}
