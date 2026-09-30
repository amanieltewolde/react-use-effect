import ThemeToggle from "./component/ThemeToggle";
import Esercizio from "./Exercise Scheme/Esercizio";
import { listExercises } from "./utilities/Lista-esercizi";

export default function Ex2() {
    return (
        <>
            <Esercizio
                titolo={listExercises[1].titolo}
                testo={listExercises[1].testo}
                bonus={listExercises[1].bonus} />

            <ThemeToggle />

        </>
    )
}