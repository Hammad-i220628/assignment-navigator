import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  BookOpen,
  ClipboardList,
  LineChart,
  User,
  Bell,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/useStore";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const announcements = useStore((state) => state.announcements);
  const unreadCount = announcements.filter((a) => !a.read).length;

  const items = [
    {
      title: "Dashboard",
      path: "/",
      icon: Home,
    },
    {
      title: "Courses",
      path: "/courses",
      icon: BookOpen,
    },
    {
      title: "Assignments",
      path: "/assignments",
      icon: ClipboardList,
    },
    {
      title: "Progress",
      path: "/progress",
      icon: LineChart,
    },
    {
      title: "Announcements",
      path: "/announcements",
      icon: Bell,
      badge: unreadCount > 0 ? unreadCount : undefined,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => navigate(item.path)}>
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="ml-auto bg-accent text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}