export default function page() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Veille concurrentielle</h1>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une boutique..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Filtres:</span>
          <select className="px-3 py-1.5 rounded-full border text-sm">
            <option>Niche</option>
          </select>
          <select className="px-3 py-1.5 rounded-full border text-sm">
            <option>Plateforme</option>
          </select>
          <select className="px-3 py-1.5 rounded-full border text-sm">
            <option>Pays ciblé</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Trier par:</span>
          <select className="px-3 py-1.5 rounded-full border text-sm">
            <option>Popularité</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="px-6 py-4 text-left">LOGO</th>
              <th className="px-6 py-4 text-left">NOM</th>
              <th className="px-6 py-4 text-left">TRAFIC</th>
              <th className="px-6 py-4 text-left">SOURCE DES VISITEURS</th>
              <th className="px-6 py-4 text-left">PRODUITS LES PLUS VENDUS</th>
              <th className="px-6 py-4 text-left">PUBLICITÉS ACTIVES</th>
              <th className="px-6 py-4 text-left">ACTION</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                  MA
                </div>
              </td>
              <td className="px-6 py-4">Mode Afrique</td>
              <td className="px-6 py-4">15K visiteurs/mois</td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    <span className="text-sm">40% organique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                    <span className="text-sm">35% réseaux sociaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                    <span className="text-sm">25% publicités</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Robe en Wax</li>
                  <li>T-shirt unisexe &quot;Africa Pride&quot;</li>
                  <li>Sac en cuir traditionnel</li>
                </ul>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  2 actives
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-full">
                  Analyser
                </button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  TA
                </div>
              </td>
              <td className="px-6 py-4">Tech Afrique</td>
              <td className="px-6 py-4">9K visiteurs/mois</td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <span className="text-sm">60% organique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="text-sm">20% réseaux sociaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="text-sm">20% publicités</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Smartphone Android &quot;TechOne&quot;</li>
                  <li>Casque Bluetooth</li>
                  <li>Tablette &quot;TechPad&quot;</li>
                </ul>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  1 active
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-full">
                  Analyser
                </button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  AP
                </div>
              </td>
              <td className="px-6 py-4">Accessoires Premium</td>
              <td className="px-6 py-4">5K visiteurs/mois</td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    <span className="text-sm">40% organique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="text-sm">20% réseaux sociaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="text-sm">20% publicités</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Montre en bois &quot;EcoTime&quot;</li>
                  <li>Sac à main en cuir recyclé</li>
                  <li>Lunettes de soleil &quot;SunStyle&quot;</li>
                </ul>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  1 active
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-full">
                  Analyser
                </button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  BN
                </div>
              </td>
              <td className="px-6 py-4">Beauté Naturelle</td>
              <td className="px-6 py-4">12K visiteurs/mois</td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="text-sm">30% organique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <span className="text-sm">50% réseaux sociaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <span className="text-sm">20% publicités</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Crème hydratante &quot;Pure Glow&quot;</li>
                  <li>Huile essentielle &quot;Lavender Bliss&quot;</li>
                  <li>Masque facial &quot;Herbaceous&quot;</li>
                </ul>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  1 active
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-full">
                  Analyser
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
