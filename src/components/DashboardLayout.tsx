import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[20rem] h-[20rem] bg-purple-500/20 rounded-full filter blur-3xl animate-float-slow left-[10%] top-[20%]"></div>
          <div className="absolute w-[15rem] h-[15rem] bg-indigo-500/15 rounded-full filter blur-3xl animate-float-medium right-[15%] top-[10%]"></div>
          <div className="absolute w-[25rem] h-[25rem] bg-violet-500/20 rounded-full filter blur-3xl animate-float-fast left-[30%] bottom-[20%]"></div>
          <div className="absolute w-[18rem] h-[18rem] bg-purple-600/15 rounded-full filter blur-3xl animate-float-slow right-[25%] bottom-[15%]"></div>
        </div>

        {/* Main gradient orbs */}
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