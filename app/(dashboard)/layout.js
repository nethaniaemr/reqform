import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-white">
        <header className="h-14 bg-white border-b border-gray-200 px-8 flex items-center shrink-0 sticky top-0 z-10">
          <SidebarTrigger className="-ml-2" />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}