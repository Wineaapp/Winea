"use client";

import { useState } from "react";
import submitWaitlist from "@/actions/submitWaitlist";
import WaitlistButton from "./WaitlistButton";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
/* import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css" */

export default function Waitlist() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [referral, setReferral] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("numero", phoneNumber as string);
    formData.set("references", referral);
    try {
      await submitWaitlist(formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      alert(
        "Une erreur est survenue lors de l'enregistrement de votre inscription. Veuillez réessayer plus tard."
      );
    }
  };

  if (submitted) {
    return (
      <div className="w-full text-center p-8">
        <h2 className="text-xl font-bold mb-4">Merci pour votre message.</h2>
        <p>
          Nous prendrons le temps de lire votre demande avec attention et nous
          vous contacterons dans quelques jours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* Smaller text inputs */}
      <input
        name="nom"
        className="border-2 text-xs text-black font-semibold py-2 px-4 rounded-full"
        type="text"
        placeholder="Votre nom"
        required
      />
      <input
        name="prenom"
        className="border-2 text-xs text-black font-semibold py-2 px-4 rounded-full"
        type="text"
        placeholder="Votre prénom"
        required
      />
      <input
        name="email"
        className="border-2 text-xs text-black font-semibold py-2 px-4 rounded-full"
        type="email"
        placeholder="Votre e-mail"
        required
      />
      <div className="md:col-span-1">
        {/* For PhoneInput, you might need to override its default CSS */}
        <PhoneInput
          name="numero"
          defaultCountry="MA"
          value={phoneNumber}
          onChange={setPhoneNumber}
          placeholder="95 55 28 12"
          className="w-full !text-xs !px-3" // Use !important utilities if needed
          required
        />
      </div>
      <div className="md:col-span-2 relative">
        <select
          name="references"
          required
          value={referral}
          onChange={(e) => setReferral(e.target.value)}
          className={`w-full border-2 text-xs font-semibold py-2 pl-4 pr-12 rounded-full bg-white appearance-none ${referral ? "text-black" : "text-gray-400"}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolyline points='2 3 5 6 8 3' stroke='black' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.75rem center",
          }}
        >
          <option
            value=""
            disabled
            style={{ color: "black", backgroundColor: "white" }}
          >
            Où vous avez entendu parler de nous
          </option>
          <option
            value="facebook"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Facebook
          </option>
          <option
            value="instagram"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Instagram
          </option>
          <option
            value="telegram"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Telegram
          </option>
          <option
            value="linkedin"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Linkedin
          </option>
          <option
            value="africommercepro"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Africommerce Pro
          </option>
          <option
            value="bouche_a_oreille"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Bouche à oreille
          </option>
          <option
            value="autre"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Autre
          </option>
        </select>
      </div>
      <input
        name="fonctionnalites"
        className="md:col-span-2 border-2 text-xs text-black font-semibold py-2 px-4 rounded-full"
        type="text"
        placeholder="Qui êtes-vous et comment notre application pourrait-elle vous aider ?"
        required
      />

      <div className="md:col-span-2">
        <WaitlistButton fullWidth />
      </div>
    </form>
  );
}
