import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen bg-[#F5F7FD]">
      <SidebarProvider
        style={
          {
            // Convert hex colors to HSL format
            "--sidebar-background": "0 0% 8%", // #141414 in HSL
            "--sidebar-foreground": "0 0% 100%", // white in HSL
            "--sidebar-width": "15rem",
            "--sidebar-border": "0 0% 8%", // #141414 in HSL
            "--sidebar-primary": "0 0% 8%", // #141414 in HSL
            "--sidebar-accent": "0 0% 14%", // #242424 in HSL
            "--sidebar-accent-foreground": "0 0% 100%", // white in HSL
            "--sidebar-ring": "0 0% 100%", // white in HSL
          } as React.CSSProperties
        }
        className="[--sidebar-mobile-background:var(--sidebar-background)]"
      >
        {/* <div className="flex flex-1 flex-col md:flex-row"> */}
        <AppSidebar />
        <main className="flex-1 p-2">
          <div className="mb-4">
            <SidebarTrigger className="p-2 rounded-md hover:bg-gray-200" />
          </div>
          {children}
        </main>
        {/* </div> */}
      </SidebarProvider>
    </div>
  );
}

{
  /* <SidebarProvider>
      <AppSidebar />
      <main className="w-full m-2">
        <SidebarTrigger className="p-2 rounded-md hover:bg-gray-200" />
        <div className="flex items-center gap-2 border-sidebar bg-sidebar border shadow rounded-md p-2 px-4">
          {/* <SearchBar /> 
          <div className="ml-auto"></div>
          <UserButton />
        </div>
        <div className="h-4"></div>
        <div className="border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4">
          {children}
        </div>
      </main>
    </SidebarProvider>  
    <div className="flex min-h-screen bg-gray-100">
      <SidebarProvider>
        <div className="flex flex-1 flex-col md:flex-row">
          <AppSidebar />
          <main className="flex-1 p-6">
            <div className="mb-4">
              <SidebarTrigger className="p-2 rounded-md hover:bg-gray-200" />
            </div>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>  */
}
