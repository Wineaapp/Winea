import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

export default function Footer() {
  return (
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
              priority
            />
          </Link>

          <div className="flex gap-4 md:gap-8 md:relative top-[0.3rem]">
            <Link
              href="https://drive.google.com/file/d/1JNiZCpZalPhvwOEhwqHWcr_aQ_oSiwnd/view?usp=sharing"
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
          <Link
            href="https://www.facebook.com/profile.php?id=61573933374926"
            target="_blank"
          >
            <BsFacebook size={24} className="text-purple-600" />
          </Link>
          <Link href="https://www.instagram.com/winea_app/" target="_blank">
            <BsInstagram size={24} className="text-purple-600" />
          </Link>
          <Link
            href="https://www.tiktok.com/@winea.app?is_from_webapp=1&sender_device=pc"
            target="_blank"
          >
            <BsTiktok size={24} className="text-purple-600" />
          </Link>
        </div>
      </div>
      <hr className="w-full border-gray-300" />
      <p className="text-gray-400 text-xs my-4 text-center">
        &copy; 2024-Winea-Tout droits réservés | Mentions légales | Politique de
        confidentialité | Conditions générales d&apos;utilisation | &nbsp;
        <Link
          href="https://www.linkedin.com/in/farel-ganlaky-395293252/"
          className="hover:text-black active:text-black transition"
          target="_blank"
        >
          Farel
        </Link>
      </p>
    </footer>
  );
}
