/* "use client";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();
  return <div>{user?.firstName}</div>;
} */

import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="layout">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
        <p className="text-gray-600">
          Bienvenue, {user?.firstName || "Utilisateur"} !
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Produits tendances</h2>
          <p className="text-gray-600 mb-4">
            Découvrez les produits les plus performants sur le marché africain.
          </p>
          <button className="bg-[#7224D1] text-white text-xs py-2 px-4 rounded-full hover:bg-[#5c1dab]">
            Explorer
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Analyse de publicités</h2>
          <p className="text-gray-600 mb-4">
            Analysez les publicités qui fonctionnent le mieux pour votre marché.
          </p>
          <button className="bg-[#7224D1] text-white text-xs py-2 px-4 rounded-full hover:bg-[#5c1dab]">
            Analyser
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Aperçu du marché</h2>
        <div className="relative h-64 mb-4">
          <Image
            src="/Dashboard.png"
            alt="Aperçu du marché"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-gray-600">
          Consultez les dernières tendances et insights du marché e-commerce
          africain.
        </p>
      </div>
    </div>
  );
}
