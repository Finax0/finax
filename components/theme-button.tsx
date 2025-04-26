"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {
    const [theme, setTheme] = useState<string>(typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light");

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button onClick={toggleTheme} className="text-[#80b388] p-2 md:text-white ">
            {theme === "light" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
    );
}
