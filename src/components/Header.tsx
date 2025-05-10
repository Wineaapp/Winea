import Link from "next/link";
import Image from "next/image";
import WaitlistButton from "./WaitlistButton";

export default function Header() {
  return (
    <header className="bg-[#7224D1] text-white">
      <div className="py-4 layout">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/winea_logo.svg"
              alt="logo"
              width={91}
              height={36}
              priority
            />
          </Link>
          <ul>
            <li>
              <Link
                href="mailto:contact@winea.app"
                className="border-2 text-xs py-4 px-6 rounded-full hover:bg-black active:bg-black transition"
              >
                Nous contacter
              </Link>
            </li>
          </ul>
        </nav>

        <section className="text-center pt-20 pb-36  md:px-20 flex flex-col justify-center items-center gap-8">
          <h1 className="font-extrabold text-3xl sm:text-5xl">
            Transformez les données e-commerce en croissance, sur tout le
            continent.
          </h1>
          <p className="font-normal sm:px-20 lg:px-59">
            Winea est conçu pour vous permettre de découvrir et d&apos;analyser
            les produits, publicités et tendances adapté au marché africain
          </p>
          <WaitlistButton />
          {/* <Link href='#waitlist' className="bg-[#EFCC5B] text-xs text-black font-semibold py-4 px-6 rounded-full [@media(hover:hover)]:hover:bg-black [@media(hover:hover)]:hover:text-white active:bg-black active:text-white transition-all">Rejoignez la liste d&apos;attente</Link> */}
        </section>
      </div>
    </header>
  );
}
