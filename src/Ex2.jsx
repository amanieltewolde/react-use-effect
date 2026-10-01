import { useState } from "react";
import ThemeToggle from "./component/ThemeToggle";
import Esercizio from "./Exercise Scheme/Esercizio";
import { listExercises } from "./utilities/Lista-esercizi";

export default function Ex2() {

    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <Esercizio
                titolo={listExercises[1].titolo}
                testo={listExercises[1].testo}
                bonus={listExercises[1].bonus} />

            {isVisible && <ThemeToggle />}

        </>
    )
}