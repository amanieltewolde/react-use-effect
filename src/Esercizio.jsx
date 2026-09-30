import { useEffect } from "react";
import { useState } from "react"

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


    return (
        <div>
            <div className="w-50">

                <h2 className="h3">{titolo}</h2>
                <p>{testo}</p>
                {bonus && <p><span className="fw-bold">Bonus:</span> {bonus}</p>}
            </div>

            <div className="container p-3 border border-primary border-4 rounded-4 w-50 my-3 mx-auto">
                <label htmlFor="notes" className="h4 form-label">
                    Blocco note
                </label>
                <textarea value={inputText} onChange={handleText} id="notes" placeholder="Scrivi le tue note qui..." className="form-control"></textarea>
            </div>
        </div>
    )
}