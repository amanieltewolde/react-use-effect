
export default function Esercizio({ titolo, testo, bonus, children }) {

    return (
        <div>
            <div className="container w-50 my-3">
                <h2 className="h3">{titolo}</h2>
                <p>{testo}</p>
                {bonus && <p><span className="fw-bold">Bonus:</span> {bonus}</p>}
            </div>
            <div className="container">
                {children}
            </div>
        </div>
    )
}