import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[40rem] h-[40rem] bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="w-[30rem] h-[30rem] bg-blue-500/10 rounded-full filter blur-3xl animate-pulse absolute"></div>
        </div>
        <DashboardSidebar />
        <main className="flex-1 p-6 overflow-auto relative">
          <div className="relative z-10 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 rounded-lg shadow-lg p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};