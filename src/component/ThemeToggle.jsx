import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {

    const [isDark, setIsDark] = useState(() => {
        const savedDataTheme = JSON.parse(localStorage.getItem('dark-mode'));
        return savedDataTheme || false;
    })

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDark));
        if (isDark) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [isDark]);


    return (
        <div>

            <div className="text-center">
                <button value={isDark} onClick={() => setIsDark(!isDark)} className={`btn ${isDark ? 'btn-light text-primary shadow-yellow' : 'btn-primary'}`}>
                    {isDark ? <Sun /> : <Moon />}
                </button>
            </div>

        </div>
    )
}