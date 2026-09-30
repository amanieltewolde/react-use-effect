export default function Notepad(props) {

    const { valueState, fx, characters } = props;
    return (
        <div className="container p-3 border border-primary border-4 rounded-4 w-50 my-3 mx-auto">
            <label htmlFor="notes" className="h4 form-label">
                Blocco note
            </label>
            <textarea value={valueState} onChange={fx} id="notes" placeholder="Scrivi le tue note qui..." className="form-control"></textarea>
            <div className="form-text text-end">Caratteri usati {characters} </div>
        </div>
    )
}