import { Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {

    const [isDark, setIsDark] = useState(() => {
        const savedDataTheme = JSON.parse(localStorage.getItem('dark-mode'));
        return savedDataTheme || false;
    })

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDark));
    }, [isDark]);



    return (
        <div>

            <div className="text-center">
                <button value={isDark} onClick={() => setIsDark(!isDark)} className={`btn ${isDark ? 'btn-primary' : 'bg-primary-subtle'} text-white`}>
                    <Moon />
                </button>
            </div>

        </div>
    )
}