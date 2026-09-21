import { useCallback, useEffect, useState } from "react";

// 与 index.html 内联脚本保持同一个 key，避免刷新时白屏闪烁
const THEME_KEY = "profile-theme";

function readStoredTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch (_) {
    /* localStorage 不可用（隐私模式等）时退回默认浅色 */
  }
  return "light";
}

// 浅色粉彩 / 深色星空 双主题切换，选择持久化到 localStorage
export default function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {
      /* 忽略写入失败 */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}