"use client";

import {
  Package,
  Play,
  Home,
  Megaphone,
  Medal,
  Store,
  Share2,
} from "lucide-react";
import { UserButton, useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Menu items.
const items = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Publicités",
    url: "/publicites",
    icon: Megaphone,
  },
  {
    title: "Produits",
    url: "/produits",
    icon: Package,
  },
  {
    title: "Produits Winners",
    url: "/winners",
    icon: Medal,
  },
  {
    title: "Tutoriels",
    url: "/tutoriels",
    icon: Play,
  },
  {
    title: "Boutiques",
    url: "/boutiques",
    icon: Store,
  },
  {
    title: "Affiliation",
    url: "/affiliation",
    icon: Share2,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel
            style={{
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Link href="/dashboard">
              <Image
                className="mx-auto"
                src="logo_purple.svg"
                alt="logo"
                width={65}
                height={26}
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={
                        isActive
                          ? "text-white"
                          : "text-gray-500 hover:text-gray-300"
                      }
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 mb-8 flex flex-row text-xs items-center">
        {isMounted && (
          <div
            id="user-button-container"
            style={{ position: "relative", zIndex: 9999 }}
          >
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonPopoverCard: "!fixed",
                  userButtonPopoverActionButtonText: "!pointer-events-auto",
                  userButtonPopoverActionButtonIcon: "!pointer-events-auto",
                  userButtonPopoverActionButton: "!pointer-events-auto",
                },
              }}
            />
          </div>
        )}
        <button
          onClick={() => signOut()}
          className="text-gray-500 hover:text-white ml-2 cursor-pointer"
        >
          Se déconnecter
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
