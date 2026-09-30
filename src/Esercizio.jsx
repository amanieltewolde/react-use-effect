export default function Esercizio({ titolo, testo, bonus }) {
    return (
        <div>
            <div className="w-50">

                <h2 className="h3">{titolo}</h2>
                <p>{testo}</p>
                {bonus && <p><span className="fw-bold">Bonus:</span> {bonus}</p>}
            </div>
        </div>
    )
}