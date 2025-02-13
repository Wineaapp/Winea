import Image from "next/image"
import Link from "next/link"
import ScrollButton from "@/components/ScrollButton";
import sendEmail from "@/actions/sendEmail";

export default function Home() {
  return (
      <>
          <header className="bg-[#7224D1] text-white">
            <div className="py-4 layout">
              <nav className="flex justify-between items-center">
                  <Link href="/">
                    <Image
                      src="/winea_logo.svg"
                      alt="logo"
                      width={91}
                      height={36}
                    />
                  </Link>
                  <ul>
                    <li>
                      <Link 
                        href="mailto:contact@winea.app" 
                        className="border-2 text-xs py-4 px-6 rounded-full [@media(hover:hover)]:hover:bg-black active:bg-black transition"
                      >
                        Nous contacter
                      </Link>
                    </li>
                  </ul>
                </nav>

                <section className="text-center pt-20 pb-36  md:px-20 flex flex-col justify-center items-center gap-8">
                  <h1 className="font-extrabold text-3xl sm:text-5xl">Boostez votre <br /> e-commerce en Afrique grâce à notre outil d&apos;analyse</h1>
                  <p className="font-thin sm:px-20 lg:px-59">Découvrez les produits, publicités et tendances adapté au marché africain</p>
                  <Link href='#waitlist' className="bg-[#EFCC5B] text-xs text-black font-semibold py-4 px-6 rounded-full [@media(hover:hover)]:hover:bg-black [@media(hover:hover)]:hover:text-white active:bg-black active:text-white transition-all">Rejoignez la liste d&apos;attente</Link>
                </section>
            </div>
          </header>

          <main>
            <div className="layout relative top-[-100px]">
              {/* Gradient background div */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-3xl opacity-80 md:opacity-40" />
                <div className="relative">
                  <Image
                    className="mx-auto"
                    src="/Dashboard.png"
                    alt="dashboard"
                    width={1116}
                    height={735}
                  />
                </div>
              </div>
              
            
            <section className="layout flex flex-col gap-16 sm:gap-32 pb-20">
              <article className="flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">Analyse des publicités multicanale</h2>
                  <p className="text-sm">
                    Identifiez les publicités les plus performantes sur des 
                    plateformes clés comme Facebook, Instagram, TikTok et, potentiellement, WhatsApp.
                  </p>
                </div>
                <Image
                  className="md:w-1/2"
                  src="/feature1.svg"
                  alt="feature1"
                  width={558}
                  height={474}
                />
              </article>

              <article className="flex flex-col md:flex-row-reverse justify-between items-center gap-16">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">Recherche avancée de produits gagnants</h2>
                  <p className="text-sm">
                  Découvrez les produits tendances adaptés à votre marché à l&apos;aide de filtres précis (niche, pays/ville cible, popularité, etc.). 
                  Profitez de recommandations automatiques basées sur les données de performance.
                  </p>
                </div>
                <Image
                  className="md:w-1/2"
                  src="/feature2.svg"
                  alt="feature2"
                  width={558}
                  height={474}
                />
              </article>

              <article className="flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">Base de données</h2>
                  <p className="text-sm">
                  Accédez à une bibliothèque mise à jour quotidiennement, incluant des statistiques de vente estimées, 
                  des sources d&apos;approvisionnement fiables, et des exemples de publicités associées.
                  </p>
                </div>
                <Image
                  className="md:w-1/2"
                  src="/feature3.svg"
                  alt="feature3"
                  width={558}
                  height={474}
                />
              </article>

              <article className="flex flex-col md:flex-row-reverse justify-between items-center gap-16">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">Analyse des tendances et insights de marché</h2>
                  <p className="text-sm">
                  Surveillez les tendances émergentes dans votre niche et bénéficiez de recommandations basées sur l&apos;évolution 
                  du marché pour rester en avance sur vos concurrents.
                  </p>
                </div>
                <Image
                  className="md:w-1/2"
                  src="/feature4.svg"
                  alt="feature4"
                  width={558}
                  height={474}
                />
              </article>

              <article className="flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">Personnalisation et collaboration</h2>
                  <p className="text-sm">
                  Créez un tableau de bord adapté à vos besoins, configurez des alertes personnalisées, 
                  et partagez vos recherches avec votre équipe grâce à des fonctionnalités collaboratives.
                  </p>
                </div>
                <Image
                  className="md:w-1/2"
                  src="/feature5.svg"
                  alt="feature5"
                  width={558}
                  height={474}
                />
              </article>

              <article className="flex flex-col md:flex-row-reverse justify-between items-center gap-16">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">Outils d&apos;intelligence artificielle et intégrations</h2>
                  <p className="text-sm">
                  Optimisez vos recherches grâce à une IA qui prédit les futurs produits gagnants et connectez-vous à des outils populaires 
                  comme Shopify ou Facebook Ads Manager pour automatiser et analyser vos campagnes.
                  </p>
                </div>
                <Image
                  className="md:w-1/2"
                  src="/feature6.svg"
                  alt="feature6"
                  width={558}
                  height={474}
                />
              </article>
            </section>

            <section className="layout text-center flex flex-col gap-24 pt-10">
              <h2 className="font-extrabold text-3xl">Nos valeurs ajoutées</h2>
              <section className="flex flex-col md:flex-row justify-between gap-16">
                <article className="flex flex-col gap-4 items-center">
                    <Image
                      src="/rapidite.svg"
                      alt="rapidite"
                      width={55}
                      height={55}
                    />
                    <h3 className="font-extrabold text-2xl">Rapidité</h3>
                    <p>Gagnez du temps en donnant accès aux informations
                       pertinentes sur les produits et publicités.</p>
                </article>
                <article className="flex flex-col gap-4 items-center">
                    <Image
                      src="/efficacite.svg"
                      alt="efficacite"
                      width={55}
                      height={55}
                    />
                    <h3 className="font-extrabold text-2xl">Efficacité</h3>
                    <p>Prenez des décisions éclairées basées sur des données fiables et actualisées.</p>
                </article>
                <article className="flex flex-col gap-4 items-center">
                    <Image
                      src="/adaptabilite.svg"
                      alt="adaptabilite"
                      width={55}
                      height={55}
                    />
                    <h3 className="font-extrabold text-2xl">Adaptabilité</h3>
                    <p>Un logiciel conçu pour répondre aux spécificités uniques du marché africain.</p>
                </article>
                <article className="flex flex-col gap-4 items-center">
                    <Image
                      src="/simplicite.svg"
                      alt="simplicite"
                      width={55}
                      height={55}
                    />
                    <h3 className="font-extrabold text-2xl">Simplicité</h3>
                    <p>Une interface intuitive, même pour les débutants, avec des outils puissants adaptés à tous les niveaux.</p>
                </article>
              </section>
            </section>

            <section id="waitlist" className="bg-[#7224D1] text-white text-center py-16 px-4 rounded-t-3xl mt-16">
                <div className="layout flex flex-col md:flex-row justify-center items-center gap-16">
                  <div className="flex flex-col gap-8 items-center justify-center md:text-left lg:px-12">
                    <h2 className="font-extrabold text-3xl">Commencer maintenant 
                      et booster vos ventes à nos outils d&apos;analyse</h2>
                    <form 
                      action={sendEmail}
                      className="flex flex-col md:flex-row md:self-start gap-4">
                      <input 
                        className="border-2 text-xs font-semibold py-4 px-6 rounded-full"
                        type="email"
                        name="receiverEmail"
                        placeholder="Votre e-mail"
                        required
                      />

                      <ScrollButton />
                    </form>
                  </div>
                  <Image
                    className="md:w-[40%]"
                    src="/personne.svg"
                    alt="personne"
                    width={558}
                    height={397}
                  />
                </div>
            </section>
          </main>

          <footer className="layout">
            <div className="text-xs py-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col gap-4 justify-center md:flex-row md:gap-8 items-center">
                <Link href="/">
                  <Image
                    className=""
                    src="logo_purple.svg"
                    alt="logo"
                    width={65}
                    height={26}
                  />
                </Link>

                <div className="flex gap-4 md:gap-8 md:relative top-[0.3rem]">
                  <Link
                    href="#waitlist"
                    className="[@media(hover:hover)]:hover:underline [@media(hover:hover)]:hover:text-purple-600 active:text-purple-600"
                  >
                    Voir la démo
                  </Link>
                  <Link 
                    href="mailto:contact@winea.app"
                    className="[@media(hover:hover)]:hover:underline [@media(hover:hover)]:hover:text-purple-600 active:text-purple-600"
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 md:gap-8">
                <Image
                  src="facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
                <Image
                  src="linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
                <Image
                  src="instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <hr className="w-full border-gray-300"/>
            <p className="text-gray-400 text-xs my-4 text-center">&copy; 2024-Winea-Tout droits réservés | Mentions légales | Politique de confidentialité
              | Conditions générales d&apos;utilisation
            </p>
          </footer>
    </>

    
  )
}
