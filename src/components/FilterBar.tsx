import React from "react";

interface FilterBarProps {
  startDate: string;
  onStartDateChange: (date: string) => void;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const AFRICAN_COUNTRIES = [
  { code: "DZ", name: "Algérie" },
  { code: "AO", name: "Angola" },
  { code: "BJ", name: "Bénin" },
  { code: "BW", name: "Botswana" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CM", name: "Cameroun" },
  { code: "CV", name: "Cap-Vert" },
  { code: "CF", name: "République centrafricaine" },
  { code: "TD", name: "Tchad" },
  { code: "KM", name: "Comores" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "RDC" },
  { code: "DJ", name: "Djibouti" },
  { code: "EG", name: "Égypte" },
  { code: "GQ", name: "Guinée équatoriale" },
  { code: "ER", name: "Érythrée" },
  { code: "ET", name: "Éthiopie" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambie" },
  { code: "GH", name: "Ghana" },
  { code: "GN", name: "Guinée" },
  { code: "GW", name: "Guinée-Bissau" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "KE", name: "Kenya" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Libéria" },
  { code: "LY", name: "Libye" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "ML", name: "Mali" },
  { code: "MR", name: "Mauritanie" },
  { code: "MU", name: "Maurice" },
  { code: "MA", name: "Maroc" },
  { code: "MZ", name: "Mozambique" },
  { code: "NA", name: "Namibie" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "RW", name: "Rwanda" },
  { code: "ST", name: "São Tomé-et-Principe" },
  { code: "SN", name: "Sénégal" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SO", name: "Somalie" },
  { code: "ZA", name: "Afrique du Sud" },
  { code: "SS", name: "Soudan du Sud" },
  { code: "SD", name: "Soudan" },
  { code: "SZ", name: "Eswatini" },
  { code: "TZ", name: "Tanzanie" },
  { code: "TG", name: "Togo" },
  { code: "TN", name: "Tunisie" },
  { code: "UG", name: "Ouganda" },
  { code: "ZM", name: "Zambie" },
  { code: "ZW", name: "Zimbabwe" },
];

export default function FilterBar({
  startDate,
  onStartDateChange,
  selectedCountry,
  onCountryChange,
  selectedStatus,
  onStatusChange,
  selectedLanguage,
  onLanguageChange,
}: FilterBarProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="startDate"
            className="block text-sm font-semibold text-gray-700"
          >
            Date de début
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-100"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="country"
            className="block text-sm font-semibold text-gray-700"
          >
            Pays
          </label>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-100 appearance-none"
          >
            {AFRICAN_COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="status"
            className="block text-sm font-semibold text-gray-700"
          >
            Statut
          </label>
          <select
            id="status"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-100 appearance-none"
          >
            <option value="all">Tous</option>
            <option value="active">Actif</option>
            <option value="inactive">Inactif</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="language"
            className="block text-sm font-semibold text-gray-700"
          >
            Langue
          </label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-100 appearance-none"
          >
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
          </select>
        </div>
      </div>
    </div>
  );
}
