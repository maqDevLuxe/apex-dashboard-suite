/**
 * Settings — Account settings page with theme customization controls.
 * Demonstrates color theme picker, RTL toggle, sidebar caption toggle.
 */
import { motion } from "framer-motion";
import { useTheme, COLOR_THEMES } from "@/contexts/ThemeContext";
import { Sun, Moon, Globe, Eye, EyeOff } from "lucide-react";

const Settings = () => {
  const { mode, toggleMode, direction, toggleDirection, colorTheme, setColorTheme, showSidebarCaptions, toggleSidebarCaptions } = useTheme();

  return (
    <div className="max-w-3xl space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Customize your dashboard experience.</p>
      </motion.div>

      {/* Appearance */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-lg p-6 space-y-6">
        <h2 className="text-base font-semibold text-foreground">Appearance</h2>

        {/* Mode toggle */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Theme Mode</p>
            <p className="text-xs text-muted-foreground">Switch between dark and light mode</p>
          </div>
          <button onClick={toggleMode} className="h-10 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium flex items-center gap-2 hover:bg-accent transition-colors">
            {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {mode === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Direction toggle */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Text Direction</p>
            <p className="text-xs text-muted-foreground">Switch between LTR and RTL layout</p>
          </div>
          <button onClick={toggleDirection} className="h-10 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium flex items-center gap-2 hover:bg-accent transition-colors">
            <Globe className="h-4 w-4" />
            {direction.toUpperCase()}
          </button>
        </div>

        {/* Sidebar captions */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Sidebar Captions</p>
            <p className="text-xs text-muted-foreground">Show or hide section labels in sidebar</p>
          </div>
          <button onClick={toggleSidebarCaptions} className="h-10 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium flex items-center gap-2 hover:bg-accent transition-colors">
            {showSidebarCaptions ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            {showSidebarCaptions ? "Visible" : "Hidden"}
          </button>
        </div>
      </motion.div>

      {/* Color Theme */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-lg p-6 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Primary Color</h2>
        <p className="text-xs text-muted-foreground">Choose your preferred accent color</p>

        <div className="flex flex-wrap gap-3">
          {COLOR_THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setColorTheme(t.id)}
              className={`h-10 w-10 rounded-full border-2 transition-all duration-200 ${
                colorTheme === t.id ? "border-foreground scale-110 ring-2 ring-foreground/20" : "border-transparent hover:scale-105"
              }`}
              style={{ background: `hsl(${t.hsl})` }}
              title={t.label}
            />
          ))}
        </div>
      </motion.div>

      {/* Profile placeholder */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-lg p-6 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Profile Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Full Name", value: "John Doe" },
            { label: "Email", value: "john@novasaas.com" },
            { label: "Role", value: "Administrator" },
            { label: "Timezone", value: "UTC-5 (EST)" },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-xs text-muted-foreground font-medium">{f.label}</label>
              <input
                type="text"
                defaultValue={f.value}
                className="mt-1 h-10 w-full rounded-lg bg-secondary border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
          ))}
        </div>
        <button className="h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Save Changes
        </button>
      </motion.div>
    </div>
  );
};

export default Settings;
