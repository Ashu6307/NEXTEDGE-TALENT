import Script from "next/script";

import { THEME_STORAGE_KEY } from "@/lib/constants/theme";

const script = `
(() => {
  try {
    const key = '${THEME_STORAGE_KEY}';
    const stored = localStorage.getItem(key);
    const preference = stored === 'light' || stored === 'dark' || stored === 'system'
      ? stored
      : 'system';
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = preference === 'system' ? (systemDark ? 'dark' : 'light') : preference;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.classList.toggle('dark', resolved === 'dark');
  } catch {}
})();
`;

export function ThemeScript() {
  return (
    <Script id="ne-theme-script" strategy="beforeInteractive">
      {script}
    </Script>
  );
}
