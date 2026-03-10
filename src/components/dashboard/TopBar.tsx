/**
 * TopBar — Dashboard header with search, theme toggle, notifications, and user avatar.
 */
import { motion } from "framer-motion";
import { Search, Sun, Moon, Bell, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { SidebarTrigger } from "@/components/ui/sidebar";

const TopBar = () => {
  const { mode, toggleMode, direction, toggleDirection } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-lg flex items-center justify-between px-4 lg:px-6 gap-4"
    >
      {/* Left: sidebar trigger + search */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search anything…"
            className="h-9 w-64 rounded-lg bg-secondary border-none pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
          />
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-1.5">
        {/* RTL/LTR toggle */}
        <button
          onClick={toggleDirection}
          className="h-9 w-9 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle text direction"
        >
          <Globe className="h-4 w-4" />
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleMode}
          className="h-9 w-9 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        {/* Notifications */}
        <button className="relative h-9 w-9 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
        </button>

        {/* Avatar */}
        <button className="ml-2 h-9 w-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary">
          JD
        </button>
      </div>
    </motion.header>
  );
};

export default TopBar;
