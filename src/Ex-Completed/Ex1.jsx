import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import Notepad from "../component/Notepad";
import { listExercises } from "../utilities/Lista-esercizi";
import Esercizio from "../Exercise Scheme/Esercizio";


export default function Ex1() {


    const [inputText, setInputText] = useState(() => {

        // recupero dati da LocalStorage, SE presenti
        const savedUserNotes = JSON.parse(localStorage.getItem('user-notes'));
        return savedUserNotes ? savedUserNotes : '';
    });


    // derived-state per ottenere i caratteri digitati
    const usedChars = inputText.length;

    useEffect(() => {

        if (inputText) {

            // salvataggio in Local Storage di dati provenienti da textarea 
            localStorage.setItem('user-notes', JSON.stringify(inputText));

        } else {
            // cancellazione key dal LocalStorage
            localStorage.removeItem('user-notes');
        }


        // Modifica Title nella Tab
        document.title = `Caratteri ${usedChars}`;
    }, [inputText, usedChars])

    function handleText(e) {
        setInputText(e.target.value);

    }

    function handleDeleteAll() {
        setInputText('');
    }

    return (
        <>
            <Esercizio
                titolo={listExercises[0].titolo}
                testo={listExercises[0].testo}
                bonus={listExercises[0].bonus}>

                <div className="d-flex justify-content-center align-items-center gap-3">
                    <Notepad fx={handleText}
                        characters={usedChars}
                        valueState={inputText} />

                    <button onClick={handleDeleteAll} className="btn btn-primary">
                        <Trash />
                    </button>
                </div>

            </Esercizio>

        </>
    )
}