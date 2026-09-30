import { useEffect } from "react";
import { useState } from "react"
import Notepad from "./component/Notepad";

export default function Esercizio({ titolo, testo, bonus }) {

    const [inputText, setInputText] = useState(() => {

        // recupero dati da LocalStorage, SE presenti
        const savedUserNotes = JSON.parse(localStorage.getItem('user-notes'));
        return savedUserNotes ? savedUserNotes : '';
    });



    useEffect(() => {
        // salvataggio in Local Storage di dati provenienti da textarea 
        localStorage.setItem('user-notes', JSON.stringify(inputText));
    }, [inputText])

    function handleText(e) {
        setInputText(e.target.value);
    }

    // derived-state per ottenere i caratteri digitati
    const usedChars = inputText.length;

    return (
        <div>
            <div className="w-50">

                <h2 className="h3">{titolo}</h2>
                <p>{testo}</p>
                {bonus && <p><span className="fw-bold">Bonus:</span> {bonus}</p>}
            </div>

            <Notepad function={handleText}
                characters={usedChars}
                value={inputText} />
        </div>
    )
}