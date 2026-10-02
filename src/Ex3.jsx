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

        // Gestione del Unmounted
        return () => window.removeEventListener('resize', handleWindowResize)


    }, [])



    function getCurrentBreakpoint() {

        if (windowSize.width < 768) {
            const breakpoint = 'Mobile';
            return breakpoint
        } else if (windowSize.width < 992) {
            const breakpoint = 'Tablet';
            return breakpoint
        } else {
            const breakpoint = 'Desktop';
            return breakpoint
        }
    }

    const currentBreakpoint = getCurrentBreakpoint();



    return (
        <>
            <Esercizio
                titolo={listExercises[2].titolo}
                testo={listExercises[2].testo}
                bonus={listExercises[2].bonus} />

            <div className="my-3 d-flex justify-content-center align-items-center gap-5">

                <div className="card p-3 border border-4 rounded-4 w-25">
                    <h3>Windows Size</h3>
                    <h5 className="card-title">Heigth</h5>
                    <p className="card-text">{windowSize.heigth} px</p>
                    <h5 className="card-title">Width</h5>
                    <p className="card-text">{windowSize.width} px</p>
                </div>

                <div className="badge d-flex gap-2 fs-3 bg-primary">
                    {currentBreakpoint}
                </div>



            </div>

        </>
    )
}