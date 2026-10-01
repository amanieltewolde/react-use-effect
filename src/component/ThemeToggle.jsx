import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function ThemeToggle({ fx, valueState }) {

    return (
        <div>
            <div className="text-center">
                <h5 className="mb-3">Se questo tema ti annoia clicca pure</h5>
                {/* Il display del bottone mostra il theme che si vuole ottenere al click */}
                <button value={valueState} onClick={fx} className={`btn ${valueState ? 'btn-light text-primary shadow-yellow' : 'btn-primary'}`}>
                    {valueState ? <Sun /> : <Moon />}
                </button>
            </div>
        </div>
    )
}