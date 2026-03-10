/**
 * AppSidebar — Main navigation sidebar with collapsible groups.
 * Respects sidebar caption show/hide from ThemeContext.
 */
import {
  LayoutDashboard,
  BarChart3,
  Clock,
  Bell,
  Users,
  HelpCircle,
  User,
  Settings,
  Shield,
  CreditCard,
  LogIn,
  UserPlus,
  KeyRound,
  Sparkles,
  MailCheck,
  ShieldCheck,
  AlertTriangle,
  Rocket,
  Wrench,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

/* Navigation structure */
const navGroups = [
  {
    label: "Dashboards",
    items: [
      { title: "SaaS Overview", url: "/", icon: LayoutDashboard },
      { title: "Subscriptions", url: "/subscriptions", icon: BarChart3 },
    ],
  },
  {
    label: "Apps & Pages",
    items: [
      { title: "Timeline", url: "/timeline", icon: Clock },
      { title: "Notifications", url: "/notifications", icon: Bell },
      { title: "Contacts", url: "/contacts", icon: Users },
      { title: "FAQ", url: "/faq", icon: HelpCircle },
    ],
  },
  {
    label: "Account",
    items: [
      { title: "My Profile", url: "/profile", icon: User },
      { title: "Settings", url: "/settings", icon: Settings },
      { title: "Security", url: "/security", icon: Shield },
      { title: "Billing & Plans", url: "/billing", icon: CreditCard },
    ],
  },
  {
    label: "Auth Pages",
    items: [
      { title: "Login", url: "/auth/login", icon: LogIn },
      { title: "Register", url: "/auth/register", icon: UserPlus },
      { title: "Forgot Password", url: "/auth/forgot-password", icon: KeyRound },
      { title: "Verify Email", url: "/auth/verify-email", icon: MailCheck },
      { title: "OTP Verification", url: "/auth/otp", icon: ShieldCheck },
    ],
  },
  {
    label: "Utility Pages",
    items: [
      { title: "Error 500", url: "/500", icon: AlertTriangle },
      { title: "Coming Soon", url: "/coming-soon", icon: Rocket },
      { title: "Maintenance", url: "/maintenance", icon: Wrench },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { showSidebarCaptions } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="custom-scrollbar py-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5 px-4 mb-6">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-base font-bold text-foreground tracking-tight">NovaSaaS</span>
          )}
        </div>

        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            {/* Show group labels based on caption visibility */}
            {showSidebarCaptions && !collapsed && (
              <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-semibold px-4 mb-1">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                        activeClassName="bg-primary/10 text-primary font-medium"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
