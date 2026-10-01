import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {

    const [isDark, setIsDark] = useState(() => {
        const savedDataTheme = JSON.parse(localStorage.getItem('dark-mode'));
        return savedDataTheme || false;
    })

    // Hook utilizzato per interazione con LocalStorage e Elementi fuori dalla UI(<html>)
    useEffect(() => {

        // Salvataggio dato  in LS
        localStorage.setItem('dark-mode', JSON.stringify(isDark));
        // Aggiunta attributo in document per settare le classi che indirizzano il Theme attule della pagina
        if (isDark) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [isDark]);

    // Hook dedicato al momento del UNMOUNTED del componente con rimozione key da LS e ripristino a valori originali, 
    useEffect(() => {
        return () => {
            document.documentElement.setAttribute('data-bs-theme', 'light');

            localStorage.removeItem('dark-mode');

            // Log di test (OK)
            console.log('componente rimosso');
        }
    }, [])


    return (
        <div>
            <div className="text-center">
                {/* Il display del bottone mostra il theme che si vuole ottenere al click */}
                <button value={isDark} onClick={() => setIsDark(!isDark)} className={`btn ${isDark ? 'btn-light text-primary shadow-yellow' : 'btn-primary'}`}>
                    {isDark ? <Sun /> : <Moon />}
                </button>
            </div>
        </div>
    )
}