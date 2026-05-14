export const THEME_STORAGE_KEY = "nextedge-theme";
export const THEME_OPTIONS = ["light", "dark", "system"] as const;
export type AppTheme = (typeof THEME_OPTIONS)[number];

export const theme = {
  colors: {
    brandNavy: "#0B1220",
    primaryBlue: "#1D4ED8",
    secondaryBlue: "#2563EB",
    cyanAccent: "#06B6D4",
    successEmerald: "#10B981",
    premiumPurple: "#7C3AED",
    warningAmber: "#F59E0B",
    dangerRose: "#E11D48",
    lightBackground: "#F8FAFC",
    lightSurface: "#FFFFFF",
    lightBorder: "#E2E8F0",
    lightText: "#0B1220",
    mutedText: "#64748B",
    darkBackground: "#020617",
    darkSurface: "#111827",
    darkBorder: "#243044",
    darkText: "#F8FAFC",
  },
};
