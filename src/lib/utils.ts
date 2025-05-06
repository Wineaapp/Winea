import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FacebookAd } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DEFAULT_AD: FacebookAd = {
  ad_archive_id: "619620434440542",
  page_name: "Jerry Kamgang",
  page_id: "330771530129036",
  snapshot: {
    body: {
      text: "Dans cette vidéo inspirante, je vous montre comment atteindre vos objectifs grâce à la détermination et aux ressources adéquates. Peu importe votre secteur d'activité, il est possible de réaliser des résultats extraordinaires avec les bonnes stratégies marketing.\n\n🚀 Je vous encourage à investir votre temps de manière judicieuse. Au lieu de passer des heures sur des distractions, consacrez ce temps à vous former et à développer vos compétences. Il existe de nombreuses ressources en ligne pour vous aider à avancer vers le succès.\n\n#business #marketingdigital #publicité #vente #FormationFBWA #JerryKamgang #réussite #entrepreneuriat #accompagnement",
    },
    page_profile_picture_url:
      "https://scontent-ams2-1.xx.fbcdn.net/v/t39.35426-6/495052711_1266890271464772_5703104495721120498_n.jpg",
    videos: [
      {
        video_preview_image_url:
          "https://scontent-ams4-1.xx.fbcdn.net/v/t39.35426-6/495126680_688287413748977_9102773714877232656_n.jpg",
        video_sd_url:
          "https://video-ams4-1.xx.fbcdn.net/v/t42.1790-2/454405383_1854847118370381_7207340241715302205_n.mp4",
      },
    ],
    title: "Comment Provoquer Votre Réussite avec la Formation FBWA 🚀",
    cta_text: "Meer informatie",
    cta_type: "LEARN_MORE",
    link_url: "https://bit.ly/3uVJ814",
    page_categories: ["Business"],
    page_like_count: 166330,
  },
  start_date: 1746342000,
  end_date: 1746428400,
  is_active: true,
  publisher_platform: [
    "FACEBOOK",
    "INSTAGRAM",
    "AUDIENCE_NETWORK",
    "MESSENGER",
  ],
};
