import { useState, useEffect } from "react";
import Esercizio from "./Exercise Scheme/Esercizio";
import { listExercises } from "./utilities/Lista-esercizi";

export default function Ex3() {

    // set dello stato delle dimensioni iniziali
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        heigth: window.innerHeight,
    })


    useEffect(() => {


        function handleWindowResize() {
            setWindowSize({
                width: window.innerWidth,
                heigth: window.innerHeight,
            });
        }

        // Ascolto dell'evento resize sulla finestra
        window.addEventListener('resize', handleWindowResize)
    }, [windowSize])



    return (
        <>
            <Esercizio
                titolo={listExercises[2].titolo}
                testo={listExercises[2].testo}
                bonus={listExercises[2].bonus} />


            <div className="card p-3 border border-4 rounded-4 w-25">
                <h3>Windows Size</h3>
                <h5 className="card-title">Heigth</h5>
                <p className="card-text">{windowSize.heigth} px</p>
                <h5 className="card-title">Width</h5>
                <p className="card-text">{windowSize.width} px</p>
            </div>


        </>
    )
}