import { useState, useEffect } from "react";
import ThemeToggle from "../component/ThemeToggle";
import Esercizio from "../Exercise Scheme/Esercizio";
import { listExercises } from "../utilities/Lista-esercizi";

export default function Ex2() {

    // Hook usato per Prova UNMOUNTED componente
    // const [isVisible, setIsVisible] = useState(false)

    const [isDark, setIsDark] = useState(() => {
        const savedDataTheme = JSON.parse(localStorage.getItem('dark-mode'));
        return savedDataTheme || false;
    })

    function handleDarkTheme() {
        setIsDark(!isDark);
    }

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
        <>
            <Esercizio
                titolo={listExercises[1].titolo}
                testo={listExercises[1].testo}
                bonus={listExercises[1].bonus}>


                <ThemeToggle
                    fx={handleDarkTheme}
                    valueState={isDark} />

            </Esercizio>

        </>
    )
}