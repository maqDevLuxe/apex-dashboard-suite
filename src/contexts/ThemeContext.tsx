/**
 * ThemeContext — Manages application-wide theme settings:
 * 1. Light/Dark mode toggle
 * 2. LTR/RTL layout direction
 * 3. 10+ primary color theme options
 * 4. Sidebar caption visibility
 */
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

/* ── Color theme definitions ── */
export const COLOR_THEMES = [
  { id: "cyan", label: "Cyan", hsl: "185 85% 50%" },
  { id: "blue", label: "Blue", hsl: "217 91% 60%" },
  { id: "violet", label: "Violet", hsl: "263 70% 58%" },
  { id: "rose", label: "Rose", hsl: "346 77% 55%" },
  { id: "orange", label: "Orange", hsl: "25 95% 53%" },
  { id: "green", label: "Green", hsl: "142 72% 45%" },
  { id: "amber", label: "Amber", hsl: "38 92% 50%" },
  { id: "teal", label: "Teal", hsl: "172 66% 45%" },
  { id: "indigo", label: "Indigo", hsl: "239 84% 67%" },
  { id: "pink", label: "Pink", hsl: "330 81% 60%" },
] as const;

export type ColorThemeId = (typeof COLOR_THEMES)[number]["id"];
type Mode = "dark" | "light";
type Direction = "ltr" | "rtl";

interface ThemeContextValue {
  mode: Mode;
  toggleMode: () => void;
  direction: Direction;
  toggleDirection: () => void;
  colorTheme: ColorThemeId;
  setColorTheme: (id: ColorThemeId) => void;
  showSidebarCaptions: boolean;
  toggleSidebarCaptions: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/** Provider component — wrap your app with this */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>(() =>
    (localStorage.getItem("theme-mode") as Mode) || "dark"
  );
  const [direction, setDirection] = useState<Direction>(() =>
    (localStorage.getItem("theme-dir") as Direction) || "ltr"
  );
  const [colorTheme, setColorThemeState] = useState<ColorThemeId>(() =>
    (localStorage.getItem("theme-color") as ColorThemeId) || "cyan"
  );
  const [showSidebarCaptions, setShowSidebarCaptions] = useState(() =>
    localStorage.getItem("sidebar-captions") !== "false"
  );

  /* Sync mode class on <html> */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(mode);
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  /* Sync direction */
  useEffect(() => {
    document.documentElement.dir = direction;
    localStorage.setItem("theme-dir", direction);
  }, [direction]);

  /* Sync color theme class */
  useEffect(() => {
    const root = document.documentElement;
    COLOR_THEMES.forEach((t) => root.classList.remove(`theme-${t.id}`));
    root.classList.add(`theme-${colorTheme}`);
    localStorage.setItem("theme-color", colorTheme);
  }, [colorTheme]);

  /* Persist sidebar captions pref */
  useEffect(() => {
    localStorage.setItem("sidebar-captions", String(showSidebarCaptions));
  }, [showSidebarCaptions]);

  const toggleMode = useCallback(() => setMode((m) => (m === "dark" ? "light" : "dark")), []);
  const toggleDirection = useCallback(() => setDirection((d) => (d === "ltr" ? "rtl" : "ltr")), []);
  const setColorTheme = useCallback((id: ColorThemeId) => setColorThemeState(id), []);
  const toggleSidebarCaptions = useCallback(() => setShowSidebarCaptions((v) => !v), []);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
        direction,
        toggleDirection,
        colorTheme,
        setColorTheme,
        showSidebarCaptions,
        toggleSidebarCaptions,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/** Hook to consume theme context */
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
