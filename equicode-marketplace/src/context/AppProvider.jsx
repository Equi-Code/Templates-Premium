import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { T } from "../i18n/translations";

export function AppProvider({ children }) {
    const [lang, setLang] = useState(
        localStorage.getItem("ec-lang") || "es"
    );

    const [theme, setTheme] = useState(
        localStorage.getItem("ec-theme") || "dark"
    );

    useEffect(() => {
        localStorage.setItem("ec-lang", lang);
    }, [lang]);

    useEffect(() => {
        localStorage.setItem("ec-theme", theme);
    }, [theme]);

    return (
        <AppContext.Provider
            value={{
                lang,
                setLang,
                theme,
                setTheme,
                isDark: theme === "dark",
                t: T[lang],
            }}
        >
            {children}
        </AppContext.Provider>
    );
}