import { useEffect } from "react";
import { useState } from "react"
import Notepad from "./component/Notepad";

export default function Esercizio({ titolo, testo, bonus }) {

    const [inputText, setInputText] = useState(() => {

        // recupero dati da LocalStorage, SE presenti
        const savedUserNotes = JSON.parse(localStorage.getItem('user-notes'));
        return savedUserNotes ? savedUserNotes : '';
    });


    // derived-state per ottenere i caratteri digitati
    const usedChars = inputText.length;

    useEffect(() => {
        // salvataggio in Local Storage di dati provenienti da textarea 
        localStorage.setItem('user-notes', JSON.stringify(inputText));

        document.title = `Caratteri ${usedChars}`;
    }, [inputText, usedChars])

    function handleText(e) {
        setInputText(e.target.value);
    }


    return (
        <div>
            <div className="w-50">

                <h2 className="h3">{titolo}</h2>
                <p>{testo}</p>
                {bonus && <p><span className="fw-bold">Bonus:</span> {bonus}</p>}
            </div>

            <Notepad fx={handleText}
                characters={usedChars}
                valueState={inputText} />
        </div>
    )
}